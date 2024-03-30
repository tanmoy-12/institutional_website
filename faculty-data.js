const facultyData = [
    {
        "name": "Teacher 1",
        "age":0,
        "education": "qualification",
        "subject": "Specialization"
    },{
        "name": "Teacher 2",
        "age": 0,
        "education": "qualification",
        "subject": "Specialization"
    },{
        name: "Teacher 3",
        "age": 0,
        "education": "qualification",
        "subject": "Specialization"
    },
    
   
];

    
        // Function to create and populate flip-card elements
        function createFacultyCards() {
            const facultyContainer = document.querySelector('.faculty-container1');
            facultyData.forEach((faculty, index) => {
                const flipCard = document.createElement('div');
                flipCard.classList.add('flip-card');

                const flipCardInner = document.createElement('div');
                flipCardInner.classList.add('flip-card-inner');

                const flipCardFront = document.createElement('div');
                flipCardFront.classList.add('flip-card-front');

                const img = document.createElement('img');
                img.src = `faculty\\faculty1.jpg`; // Assuming images are named faculty1.png, faculty2.png, ...
                img.alt = "Avatar";
                img.style.width = "250px";
                img.style.height = "300px";

                flipCardFront.appendChild(img);

                const flipCardBack = document.createElement('div');
                flipCardBack.classList.add('flip-card-back');

                const h1 = document.createElement('h2');
                h1.innerText = faculty.name;

                const pAge = document.createElement('p');
                pAge.innerText = `Age: ${faculty.age}`;

                const pEducation = document.createElement('p');
                pEducation.innerText = `Education: ${faculty.education}`;

                const pSubject = document.createElement('p');
                pSubject.innerText = `Subject: ${faculty.subject}`;

                flipCardBack.appendChild(h1);
                flipCardBack.appendChild(pAge);
                flipCardBack.appendChild(pEducation);
                flipCardBack.appendChild(pSubject);

                flipCardInner.appendChild(flipCardFront);
                flipCardInner.appendChild(flipCardBack);

                flipCard.appendChild(flipCardInner);

                facultyContainer.appendChild(flipCard);
            });
        }

        // Call function to create and populate flip-card elements
        createFacultyCards();