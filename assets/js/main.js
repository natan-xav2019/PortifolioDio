function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData) {
    const softSkillsList = document.getElementById('profile.softSkills')
    
    softSkillsList.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`)
}

function updateHardSkills(profileData) {
    const hardSkillsList = document.getElementById('profile.hardSkills')
    
    hardSkillsList.innerHTML = profileData.skills.hardSkills.map(skill => {
        return `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" /></li>`
    }).join('')
}

function updateLanguages(profileData) {
    const languagesList = document.getElementById('profile.languages')
    languagesList.innerHTML = profileData.languages.map(language => {
        return `<li>${language}</li>`
    }).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => {
        return `
            <li>
                <h3 ${portfolio.git ? "class='github title'": 'class="title"'}>${portfolio.name}</h3>
                <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
            </li>
        `
    }).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.experience.map(experience => {
        return `
            <li>
              <h3 class="title">${experience.name}</h3>
              <p class="period">${experience.period}</p>
              <p>
                ${experience.description}
              </p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()
