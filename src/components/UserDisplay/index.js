import React from 'react';

function UserDisplay({ userJson }) {
    return (
    <div>
        <img src={userJson.avatar_url} alt={ userJson.name } />
        <h2>{ userJson.name } ({ userJson.login})</h2>
        <p>{ userJson.email }</p>

        <ul>
            <li><a src={ userJson.blog }>Website</a></li>

            <li>Followers: { userJson.followers }</li>
            <li>Following: { userJson.following }</li>
            <li>Repos: { userJson.public_repos }</li>
            <li>Gists: { userJson.public_gists }</li>
            <li>User registered on: { userJson.created_at }</li>
        </ul>

    </div>);
}

export default UserDisplay;
