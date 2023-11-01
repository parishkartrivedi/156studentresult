document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const rollNumberInput = document.getElementById('roll-number');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');
    const studentName = document.getElementById('student-name');
    const studentSubject = document.getElementById('student-subject');
    const studentSubject = document.getElementById('student-subject1');
    const studentSubject = document.getElementById('student-subject2');
    const studentSubject = document.getElementById('student-subject3');
    const studentSubject = document.getElementById('student-subject4');
    const studentSubject = document.getElementById('student-subject5');
    const studentSubject = document.getElementById('student-subject6');
    const studentMarks = document.getElementById('student-marks');
    const studentMarks = document.getElementById('student-marks1');
    const studentMarks = document.getElementById('student-marks2');
    const studentMarks = document.getElementById('student-marks3');
    const studentMarks = document.getElementById('student-marks4');
    const studentMarks = document.getElementById('student-marks5');
    const studentMarks = document.getElementById('student-marks6');
    const studentRemarks = document.getElementById('student-remarks');
    const studentRemarks = document.getElementById('student-remarks1');
    const studentRemarks = document.getElementById('student-remarks2');
    const studentRemarks = document.getElementById('student-remarks3');
    const studentRemarks = document.getElementById('student-remarks4');
    const studentRemarks = document.getElementById('student-remarks5');
    const studentRemarks = document.getElementById('student-remarks6');

    searchButton.addEventListener('click', function() {
        const rollNumber = rollNumberInput.value;

       
        const studentData = {
            "101": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "102": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "103": {
                "name": "John Doe",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "104": {
                "name": "Jane Smith",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "105": {
                "name": "John Doe",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "106": {
                "name": "Jane Smith",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "107": {
                "name": "John Doe",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "108": {
                "name": "Jane Smith",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "109": {
                "name": "John Doe",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "110": {
                "name": "Jane Smith",
                "subject": "Math",
                "subject1": "Math1",
                "subject2": "Math2",
                "subject3": "Math3",
                "subject4": "Math4",
                "subject5": "Math5",
                "subject6": "Math6",
                "marks": 95,
                "marks1": 95,
                "marks2": 95,
                "marks3": 95,
                "marks4": 95,
                "marks5": 95,
                "marks6": 95,
                "remarks": "Excellent"
                "remarks1": "Excellent"
                "remarks2": "Excellent"
                "remarks3": "Excellent"
                "remarks4": "Excellent"
                "remarks5": "Excellent"
                "remarks6": "Excellent"
            },
            "111": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "112": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "113": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "114": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "115": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "116": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "117": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "118": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "119": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "120": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "121": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "122": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "123": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "124": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "125": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "126": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "127": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "128": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "129": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "130": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "131": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "132": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "133": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "134": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "135": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "136": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "137": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "138": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "139": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "140": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "141": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "142": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "143": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "144": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "145": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "146": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "147": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "148": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "149": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "150": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "151": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "152": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "153": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "154": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "155": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            
            "156": {
                "name": "akshay trivedi",
                "subject": "History",
                "marks": 45,
                "remarks": "Very Good"
            }
        };

        if (studentData[rollNumber]) {
            const student = studentData[rollNumber];
            studentName.textContent = student.name;
            studentSubject.textContent = student.subject;
            studentSubject.textContent = student.subject1;
            studentSubject.textContent = student.subject2;
            studentSubject.textContent = student.subject3;
            studentSubject.textContent = student.subject4;
            studentSubject.textContent = student.subject5;
            studentSubject.textContent = student.subject6;
            studentMarks.textContent = student.marks;
            studentMarks.textContent = student.marks1;
            studentMarks.textContent = student.marks2;
            studentMarks.textContent = student.marks3;
            studentMarks.textContent = student.marks4;
            studentMarks.textContent = student.marks5;
            studentMarks.textContent = student.marks6;
            studentRemarks.textContent = student.remarks;
            studentRemarks.textContent = student.remarks1;
            studentRemarks.textContent = student.remarks2;
            studentRemarks.textContent = student.remarks3;
            studentRemarks.textContent = student.remarks4;
            studentRemarks.textContent = student.remarks5;
            studentRemarks.textContent = student.remarks6;
            resultContainer.style.display = 'block';
        } else {
            alert('Student not found. Please check the roll number.');
        }
    });
});
