interface Commit {
    // sha.slice(0,7)
    // commitMessage
    // commitAuthorName
    // commitAuthorDate
    sha: string,
    message: string,
    //author: Author
}

export default Commit;