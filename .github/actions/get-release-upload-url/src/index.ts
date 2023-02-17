import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  try {
    const repoOptions = github.context.repo;
    const octokit = github.getOctokit(process.env.GITHUB_TOKEN as string);
    const tag = github.context.ref.replace("refs/tags/", "")

    const release = await octokit.rest.repos.getReleaseByTag({
        ...repoOptions,
        tag
    })

    core.setOutput("upload_url", release.data.upload_url)
  } catch (error: any) {
    console.error(error);
    core.setFailed(error);
  }
}
run();
