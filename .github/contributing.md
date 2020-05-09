# Contributing to the project

If you want to contribute to the project, follow the steps: 

1. Go to the repository that you want to contribute: https://github.com/my-checklist/my-checklist--back-end;
2. Fork it with the `Fork` button on the right upper corner of the screen;
3. After that the repository will be available in your own profile: https://github.com/{{YOUR_PROFILE}}/my-checklist--back-end;
4. Clone your fork using [SSH KEY](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh);
5. Then add the `upstream` to the repo's remote with the command: `git remote add upstream https://github.com/my-checklist/https://github.com/my-checklist/my-checklist--back-end`
6. Now go to the repository's README https://github.com/my-checklist/my-checklist--back-end/blob/master/README.md#running-the-project-in-your-local-enviroment and learn how to run the project;

Doing that you're all good to go. Before start the work do not forget to run `git pull upstream master`, so you're always up to date with the repo.
**Important**: always create a new branch to work.
Make all the changes/fixes you think it's necessary and then submit a new pull request. Give it a good description. 

### IMPORTANT! 

We make use of the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), so make sure to know how to elaborate a good commit message. Otherwise, the `pre-commit` git-hook will not allow you to commit. D: 

## Tips

1. Be a good _commitizen_. Commit small and consistent chunks of code. Make the reviewer's life easier. This increases the chance for your commit to be approved;
2. **Always** test your solutions with - at least - unit tests. This will increase the code quality and transform you into an even better developer. Also, the CI server will not allow us to approve the PR if the tests fails. 
