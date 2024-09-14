// Get the button element and the skills section using type casting
var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
// Show the skills section by default
skillsSection.style.display = 'block';
toggleSkillsButton.textContent = 'Hide Skills'; // Initial button text
// Add a click event listener to toggle the visibility of the skills section
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        // Show the skills section
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills'; // Change button text
    }
    else {
        // Hide the skills section
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills'; // Change button text
    }
});
