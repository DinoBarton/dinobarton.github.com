// Fetch GitHub profile information
fetch('https://api.github.com/users/DinoBarton')
.then(response => response.json())
.then(data => {
    const githubProfileInfo = document.getElementById('github-profile-info');
    const profilePicture = document.getElementById('profile-picture');
    profilePicture.src = data.avatar_url;
    profilePicture.alt = "Profile Picture";
    githubProfileInfo.innerHTML = `
        <p>Username: ${data.login}</p>
        <p>Name: ${data.name}</p>
        <p>Bio: ${data.bio}</p>
        <p>Location: ${data.location}</p>
        <p>Public Repositories: ${data.public_repos}</p>
    `;
})
.catch(error => {
    console.error('Error fetching GitHub profile:', error);
});

