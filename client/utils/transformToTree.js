/*
const folderArray =  [{
	"id": 5,
	"parent_id": 1,
	"name": "React",
	"student_id": "1"
},
{
	"id": 4,
	"parent_id": 3,
	"name": "Java pour les nuls",
	"student_id": "1"
},
{
	"id": 3,
	"parent_id": 2,
	"name": "Java",
	"student_id": "1"
},
{
	"id": 2,
	"parent_id": 0,
	"name": "Cours d'informatique",
	"student_id": "1"
},
{
	"id": 1,
	"parent_id": 0,
	"name": "Maths_Courses",
	"student_id": "1"
}]

const courseArray = [
{
	"course_id": 4,
	"id": "3_4",
	"parent_id": 3,
	"name": "Apprenez a programmer en Java basic",
	"student_id": "1"
},
    
{
	"course_id": 1,
	"id": "5_1",
	"parent_id": 5,
	"name": "Apprenez a programmer en ReactJS",
	"student_id": "1"
},
{
	"course_id": 2,
	"id": "1_2",
	"parent_id": 5,
	"name": "Apprenez a programmer en ReactJS second part",
	"student_id": "1"
},
{
	"course_id": 3,
	"id": "2_3",
	"parent_id": 3,
	"name": "Apprenez a programmer en C#",
	"student_id": "1"
}
]

*/

function buildData(folderArray, parentId, coursesArray){
    var newArray = new Array();
        if(folderArray){
            folderArray.forEach(function(el){
                const id = el['id'];
                var children = folderArray.filter(function(element){
                    return (element['parent_id'] == id );
                });
                if(el['parent_id'] == parentId){
                        const courses = getCourses(coursesArray,id);
                        const elChildren = buildData(children,id,coursesArray);
                        
                        if(courses){
                            el['children'] = courses;
                        }
                        if(elChildren){
                            if(el['children']){
                                el['children'] = el['children'].concat(elChildren);
                            }
                            else{
                                el['children'] = elChildren;
                            }
                        }
                    newArray.push(el);
                }
               // return el;
            });
    }
    //console.log('\n\n\n',JSON.stringify(newArray));
    return newArray;
}

function getCourses(dataArray, id){
    if(dataArray){
        var children = dataArray.filter(function(element){
                return (element['parent_id'] == id);
        });
        if(children.length > 0) return children;
    }
    else return;
}

//var counter =0;

function checkExistingId(mainData, currentId, exists){
    console.log(mainData['id']);
    if(mainData['id'] == currentId) 
    {
        console.log('exists  main : ', mainData['id']);
        exists = true;
    }
    else if(mainData['children']){
        mainData['children'].forEach(function(el){
            if(checkExistingId(el, currentId))
            {
                
                console.log('exists : ', el['id']);
                 exists = true;
            }
        });
    }
    return exists;
}

export default function transformToTree(jsonData, courseData){
    const treeData = buildData(jsonData,0, courseData);
    return treeData;
}


/*var check = buildData(folderArray,0);
console.log(JSON.stringify(check));*/
