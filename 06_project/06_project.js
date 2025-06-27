const insert = document.querySelector("#insert");

/* Why window is used:
1. Global Key Listening
window represents the entire browser window.
By attaching the listener to window, you're saying:
“I want to detect key presses no matter where the user is on the page.”
*/

window.addEventListener('keydown',function(e){
    insert.innerHTML = `
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
</table>
`;

})