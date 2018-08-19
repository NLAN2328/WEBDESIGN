function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(res=>{
			if(res.ok){
				resolve(res.json());
          }else{
           reject(new Error('error'));
          }
		})
	})
}var fetchedData=loadjson("data.json");
fetchedData.then(data=>{
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);
})
var child2=document.querySelector(".child2");
console.log(child2);
function career(car){
var heading=document.createElement("h3");
heading.textContent="career Objective";
child2.appendChild(heading);
var hr=document.createElement("hr");
heading.appendChild(hr);
var text=document.createElement("p");
text.textContent=car.info;
child2.appendChild(text);
}
function education(edu){
	var heading=document.createElement("h3");
	heading.textContent="Education Qualification";
	child2.appendChild(heading);
	var hr=document.createElement("hr");
	heading.appendChild(hr);	
	var tab=document.createElement("table");
	tab.border="1";
	child2.appendChild(tab);
	var tr="<tr> <th> Degree </th> <th>Institution</th> <th>Data</th> </tr>";
    tab.innerHTML=tr;
    var  tr1="";
    for(var i=0;i<edu.length;i++){
    	tr1+="<tr> <td>"+edu[i].degree+"</td> <td>"+edu[i].institution+"</td><td>"+edu[i].data+"</td></tr>";
    }
    tab.innerHTML=tr+tr1;
}
function skills(sk){
	var heading=document.createElement("h3");
	heading.textContent="Technical Skills";
	child2.appendChild(heading);
	var hr=document.createElement("hr");
	heading.appendChild(hr);
	for(var i=0;i<sk.length;i++){
		var skDiv=document.createElement("div");
		skDiv.classList.add("skDiv");
		child2.appendChild(skDiv);
		var title=document.createElement("h3");
		     title.textContent=sk[i].title;
		var hr=document.createElement("hr");
		title.appendChild(hr);
		skDiv.appendChild(title);
		for(var j=0;j<sk[i].content.length;j++){
		var con=document.createElement("span");
	    con.textContent=sk[i].content[j];
	    skDiv.appendChild(con);
	}
}
}
	