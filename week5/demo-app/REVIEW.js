function fetchGithubUserDetails(username) {
    const url = `https://api.github.com/users/${username}`;

    const req = new XMLHttpRequest();
    req.addEventListener('load', function () {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText);
            renderUserProfile(user);
            fetchRepositories(user.repos_url);
        }
        else {
            document.querySelector('#userProfile').innerHTML = `
                <h3 class='text-danger'>Error occurred while fetching details. Check if username is correct!</h3>
            `;
        }

    });

    req.addEventListener('error', function () {


    });

    req.open("GET", url);
    req.send();
}


function fetchRepositories(url) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('per_page', 10000);
    url = urlObj.toString();
    const req = new XMLHttpRequest();
    req.addEventListener('load', function () {
        const repos = JSON.parse(this.responseText);
        renderRepositories(repos);
    });

    req.open("GET", url);
    req.send();
}


function renderUserProfile(user) {
    const outputElement = document.querySelector('#userProfile');
    outputElement.innerHTML = `
        <img src="${ user.avatar_url }" width="200px"/>
        <h3><a href="${user.html_url}" target="_blank">${ user.name }</a></h3>
    `;
}

function renderRepository(repo) {
    const li = document.createElement('li');
    li.innerHTML = `<a href=${repo.html_url} target="_blank">${repo.full_name}</a>`;
    return li;
}


function renderRepositories(repos) {
    const outputElement = document.querySelector('#repos');
    outputElement.innerHTML = '<h3>Repositories:</h3>';
    for (const repo of repos) {
        const repoElement = renderRepository(repo);
        outputElement.appendChild(repoElement);
    }
}


document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('#username');
    fetchGithubUserDetails(input.value);
    document.querySelector('#userProfile').innerHTML = "Loading user details ...";
    document.querySelector('#repos').innerHTML = "";
});
