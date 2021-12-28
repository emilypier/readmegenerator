const generateProjectName = (projectName, description) => {
  return `
    #${projectName}

    ## Description
    ${description}
  `;
};

const generateLink = (username, repoName) => {
  return `
    ## Website
    https://${username}.github.io/${repoName}/
  `
}

const generateBuiltWith = (languages) => {
  return `
    ## Built With
    * ${languages}
  `;
}


const generateName = (name) => {
  return ` ## Made by 
    ${name}
  `;
}