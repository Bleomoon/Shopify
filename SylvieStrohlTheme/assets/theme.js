function changeClassOfLayout(i)
{
    if(i == 1)
        document.getElementById('myLayout').className = 'oneProduct-Standard';
    else if(i == 2)
        document.getElementById('myLayout').className = 'oneProduct-List';
    else
        document.getElementById('myLayout').className = 'oneProduct-Grid';
}