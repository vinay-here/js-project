function updateclock (){

    const timeElement = document.getElementById("time");
    const DateElement = document.getElementById("date");


    const now = new Date() // its gives date time   
    const hours = now.getHours() % 12 || 12; 
    const minutes = now.getMinutes() .toString() .padStart(2,"0");
    const seconds = now.getSeconds().toString() .padStart(2,"0");
    const ampm = now.getHours() >=12 ? "PM" : "AM";

      const options ={
        weekday: "long",
        years: "numeric",
        month: "long",
        day: "numeric",
      };

    const dateString = now.toLocaleDateString(undefined,options)

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    DateElement.textContent = dateString;

 
}
setInterval(updateclock,1000);

updateclock();

//it convert into string and if there is single digit the convert into 2 with adding 0;