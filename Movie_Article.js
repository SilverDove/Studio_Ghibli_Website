

function addReviews(name , comment, date){
	var review_th = document.getElementById('review_table_th').innerHTML;
	if (!(review_th.localeCompare("EMPTY"))){
		document.getElementById('review_table_th').innerHTML = "REVIEWS"
	}
    
	var review_tr = document.createElement("tr");
	var review_td = document.createElement("td");
	var review_date_p = document.createElement("p");
	var review_comment_p = document.createElement("p");
	

    var commentsContent = document.createTextNode(comment);
	var review_date_and_name = document.createTextNode(date+",   "+name);
	
	review_comment_p.appendChild(commentsContent);
	review_date_p.appendChild(review_date_and_name);
	review_td.appendChild(review_date_p);
	review_td.appendChild(review_comment_p);
	review_tr.appendChild(review_td);

    document.getElementById("reviewsTable").appendChild(review_tr);
	
	document.getElementById("name").value="";
	commentField = document.getElementById("comment");
	commentField.value="";
	post.style.display="none";
	
}	
	
function resetCursor(txtElement) { 
    txtElement.focus(); 
    txtElement.setSelectionRange(0, 0); 
}

	
function getCurrentDate(){
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

}

function checkInputEntries(){
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    if(comment.length != 0){
        if(name.length == 0){
           name = "Anonymous"
        }
        addReviews(name , comment, getCurrentDate());
    }
}

function EnterClick(){
	if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) ) {
				post.style.display="";
	}else{
		if (event.keyCode == 13){
			var name = document.getElementById("name").value;
			var comment = document.getElementById("comment").value;
			
			var AlphaNumericRegex = /^.*([0-9]|[a-z])+.*$/;

			if(comment.length!=0){
				if(name.length == 0){
					name = "Anonymous"
				}
				addReviews(name , comment, getCurrentDate());
			}
		}
	}
}


post.style.display="none";
var post_button = document.querySelector('.post_button');
var commented = document.querySelector('#comment');
post_button.addEventListener('click', checkInputEntries);
commented.addEventListener('keydown', EnterClick);