function displayDateTime(){
   const now =new Date();
   const dateTimeString = now.toLocaleString();
   document.getElementById('datetime').innerText=dateTimeString;
    
}
window.onload=displayDateTime;