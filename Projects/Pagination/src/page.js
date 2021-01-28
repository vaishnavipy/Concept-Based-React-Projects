import React from "react"

function Page({followers}){


    const rows = followers.map(person => {
        const {avatar_url,login,html_url} = person
        return(
            <div className="person-div">
                <div className="img-div"><img src={avatar_url}/></div>
                <p>{login}</p>
                <a href={html_url} target="_blank">View Profile</a>
            </div>
        )

    })

    return(
    <div className="followers-grid">
        {rows}
    </div>)
}

export default Page