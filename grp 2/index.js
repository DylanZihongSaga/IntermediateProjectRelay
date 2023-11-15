document.addEventListener('keydown', function(event) {
    const container = document.getElementById('container');
    // Retrieve the current rotation from the container's transform property
    let currentRotation = container.style.transform.replace(/[^0-9.]/g, '') || 0;
    currentRotation = parseFloat(currentRotation);

    if (event.key === 'O') {
        currentRotation -= 10; // Rotate anti-clockwise
    } else if (event.key === 'L') {
        currentRotation += 10; // Rotate clockwise
    }

    // Apply the updated rotation to the container
    container.style.transform = `rotate(${currentRotation}deg)`;
});

while (True){ //enemy will move towards player
    var position_x = document.getElementById("player").style.left
    var position_y = document.getElementById("player").style.top
    var emy_x = document.getElementById("enemy").style.left 
    var emy_x = document.getElementById("enemy").style.top 
    if (position_x < emy_x){
        document.getElementById("player").style.left -= 1
    } elseif (position_x > emy_x){
        document.getElementById("player").style.left += 1
    }
    if (position_y < emy_y){
        document.getElementById("player").style.top -= 1
    } elseif (position_y > emy_y){
        document.getElementById("player").style.top += 1
    }
    if ((position_x - enemy_x) < 10 || (enemy_x - position_x) < 10){
        player_hp -= 1
    }
}