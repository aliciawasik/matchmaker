document.getElementById('matchmakerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q4 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q5 = parseInt(document.querySelector('input[name="q1"]:checked').value);

    const weight = 4;
    const totalScore = (q1 + q2 + q3 + q4 + q5) * weight;

    let matchMessage = '';

    if (totalScore <33) {
        matchMessage= "Run away.";
    } else if (totalScore > 33 && totalScore <= 66) {
        matchMessage= "Friendzoned.";
    } else if (totalScore >66 && totalScore <= 100) {
        matchMessage= "True love!"
    } else {
        matchMessage= "It's difficult to categorize you. You seem to be unique."
    }

    document.getElementById('matchMessage').textContent = matchMessage;
    document.getElementById('result').classList.remove('hidden');
});