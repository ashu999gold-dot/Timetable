const SEMESTER_COURSES = [
  {
    "code": "GE 101",
    "name": "General Education I",
    "instructor": "Snehal Kashikar(I),Paridhi Bhandari(I),Suman Choudhury(I),Eline Groeneweg-Bhatt(I),Argha Manna(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Central Arcade,Jagdish Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Central Arcade,Jagdish Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "MA 104 (E)",
    "name": "Ordinary Differential Equations (first half)",
    "instructor": "Sudeshna Roy(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/101,7/210,7/103,7/104,7/105,7/201,7/204"
      }
    ]
  },
  {
    "code": "MA 104 (H)",
    "name": "Ordinary Differential Equations (first half)",
    "instructor": "Mamta Balodi(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/205,7/206,7/207"
      }
    ]
  },
  {
    "code": "ES 113 (E)",
    "name": "Data-Centric Computing",
    "instructor": "Anup Kalbalia(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/104,10/105,10/203,10/204"
      }
    ]
  },
  {
    "code": "ES 113 (H)",
    "name": "Data-Centric Computing",
    "instructor": "Anup Kalbalia(I+L)",
    "slots": [
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/104,10/105"
      }
    ]
  },
  {
    "code": "ES 119 (E)",
    "name": "Principles of Artificial Intelligence",
    "instructor": "Manisha Padala(I),Nirmal Sancheti(I),Nipun Batra(I),Bireswar Das(L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/103,10/104,Harsha Patel Learning Theatre"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/103,10/104,Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "ES 119 (H)",
    "name": "Principles of Artificial Intelligence",
    "instructor": "Manisha Padala(I),Nirmal Sancheti(I),Nipun Batra(I),Bireswar Das(L)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "ES 114 (E)",
    "name": "Probability, Statistics, and Data Visualization",
    "instructor": "Mayank Singh(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/104,Jasubhai Auditorium"
      }
    ]
  },
  {
    "code": "ES 114 (H)",
    "name": "Probability, Statistics, and Data Visualization",
    "instructor": "Mayank Singh(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/102"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/104,10/105"
      }
    ]
  },
  {
    "code": "ES 116 (E)",
    "name": "Principles and Applications of Electrical Engineering",
    "instructor": "Tarun Agrawal(I+T+L),Dinesh Sharma(T+L),Ragavan K(T),S Rajendran(T+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/101,7/103,7/106,7/107,7/109,7/110,7/202,7/204,7/206,7/207"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "EE Lab"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "EE Lab"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "EE Lab"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "EE Lab"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "EE Lab"
      }
    ]
  },
  {
    "code": "ES 116 (H)",
    "name": "Principles and Applications of Electrical Engineering",
    "instructor": "Dinesh Sharma(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/103"
      }
    ]
  },
  {
    "code": "ES 117 (E)",
    "name": "The World of Engineering",
    "instructor": "Udit Bhatia(L),Himanshu Shekhar(L)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jasubhai Auditorium"
      }
    ]
  },
  {
    "code": "ES 117 (H)",
    "name": "The World of Engineering",
    "instructor": "Udit Bhatia(L),Himanshu Shekhar(L)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "CE 202",
    "name": "Sustainability and Environment",
    "instructor": "Abhishek Singhal(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/109"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "CS 203",
    "name": "Software Tools & Techniques for AI",
    "instructor": "Nipun Batra(I+L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/103"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/105,Jasubhai Auditorium"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/105,Jasubhai Auditorium"
      }
    ]
  },
  {
    "code": "ES 211",
    "name": "Thermodynamics",
    "instructor": "Atul Bhargav(I),Abinaya Sampath(T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/103"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Jagdish Patel Learning Theatre,7/106,7/107"
      }
    ]
  },
  {
    "code": "ES 214",
    "name": "Discrete Mathematics",
    "instructor": "Jyothi Krishnan(I+T),Balagopal (T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Surendra C Sheth Learning Theatre,7/201"
      }
    ]
  },
  {
    "code": "EE 225",
    "name": "Unveiling the Semiconductor World",
    "instructor": "Nihar Mohapatra(I)",
    "slots": [
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jagdish Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "EE 226",
    "name": "Semiconductor Devices",
    "instructor": "Sandip Lashkare(I+T),Nihar Mohapatra(T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Jayshree S Sheth Learning Theatre,7/209"
      }
    ]
  },
  {
    "code": "HS 192",
    "name": "Introduction to writing II",
    "instructor": "Jooyoung Kim(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jasubhai Auditorium, 7/101,7/102,7/103,7/104,7/201,7/207,7/208,7/209,11/101"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jasubhai Auditorium, 7/101,7/102,7/103,7/104,7/201,7/207,7/208,7/209,11/101"
      }
    ]
  },
  {
    "code": "MSE 207",
    "name": "Structure of Materials",
    "instructor": "Anagh Bhaumik(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/210"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/210"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "CS 201",
    "name": "Theory of Computing",
    "instructor": "Bireswar Das(I+T),Balagopal (T)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jagdish Patel Learning Theatre,11/101"
      }
    ]
  },
  {
    "code": "PH 201",
    "name": "Introduction to Electrodynamics",
    "instructor": "Rusa Mandal(I+T),Abhisek Samanta(T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/208,7/209"
      }
    ]
  },
  {
    "code": "PH 203",
    "name": "Solid State Physics",
    "instructor": "Chandan Kumar Mishra(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "CL 202",
    "name": "Chemical Engineering Thermodynamics",
    "instructor": "Pratyush Dayal(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/108"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "CS 203",
    "name": "Software Tools & Techniques for AI",
    "instructor": "Nipun Batra(I+L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/103"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/105,Jasubhai Auditorium"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/105,Jasubhai Auditorium"
      }
    ]
  },
  {
    "code": "CL 203",
    "name": "Process Fluid Mechanics",
    "instructor": "Abinaya Sampath(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "CL 204",
    "name": "Heat Transfer",
    "instructor": "Biswajit Saha(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/102"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "MA 203",
    "name": "Numerical Methods (second half)",
    "instructor": "Abhinav Jha(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/101,7/210,7/103,7/104,7/105,7/201,7/204,7/205,7/202,7/203"
      }
    ]
  },
  {
    "code": "MA 204",
    "name": "Introduction to Partial Differential Equations (second half)",
    "instructor": "Jagmohan Tyagi(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/106"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/106"
      },
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "CL 205",
    "name": "Chemical Reaction Engineering - I",
    "instructor": "Kabeer Jasuja(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "ME 209",
    "name": "Principles of Manufacturing Processes",
    "instructor": "Rakesh Singhai(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/209"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/209"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/209"
      }
    ]
  },
  {
    "code": "ES 211",
    "name": "Thermodynamics",
    "instructor": "Atul Bhargav(I),Abinaya Sampath(T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/103"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Jagdish Patel Learning Theatre,7/106,7/107"
      }
    ]
  },
  {
    "code": "ES 221",
    "name": "Mechanics of Solids",
    "instructor": "Harmeet Singh(I+T),Harini Subramanian(T),Ravi Ayyagari(T)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/208"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/208"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/102,7/105,7/107"
      }
    ]
  },
  {
    "code": "ES 212",
    "name": "Fluid Mechanics",
    "instructor": "Subhasish Dey(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/101"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/101"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "ES 214",
    "name": "Discrete Mathematics",
    "instructor": "Jyothi Krishnan(I+T),Balagopal (T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Surendra C Sheth Learning Theatre,7/201"
      }
    ]
  },
  {
    "code": "ES 246",
    "name": "Vacuum Technology Laboratory",
    "instructor": "Emila Panda(L)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/103,MSE Lab"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/103,MSE Lab"
      }
    ]
  },
  {
    "code": "ES 247",
    "name": "IC Fabrication Processes",
    "instructor": "Nihar Mohapatra(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/101"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "EE 227",
    "name": "CMOS Circuit Design",
    "instructor": "Joycee Mekie(I+T+L)",
    "slots": [
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/104"
      },
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/104"
      }
    ]
  },
  {
    "code": "CE 202",
    "name": "Sustainability and Environment",
    "instructor": "Abhishek Singhal(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/109"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "ME 207",
    "name": "Fluid Dynamics",
    "instructor": "Shubhangi Bansude(I+T),Lokesh Malik(L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/208,7/209"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Surendra C Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "ME 208",
    "name": "Vibrations",
    "instructor": "Jayaprakash K. R.(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/209"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/209"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/209"
      }
    ]
  },
  {
    "code": "ME 333",
    "name": "Mechanics of Materials",
    "instructor": "Prabhat Munshi(I+T+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/109"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "ME Lab"
      }
    ]
  },
  {
    "code": "CE 302",
    "name": "Structural Analysis",
    "instructor": "Manish Kumar(I+T),S Chandrasekaran(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/101"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/101"
      },
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "CS 303",
    "name": "Mathematical Foundations for AI",
    "instructor": "Nirmal Sancheti(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Surendra C Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "MSE 315",
    "name": "Introduction to Computational Materials Engineering",
    "instructor": "Raghavan Ranganathan(I+T+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/210"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/210"
      },
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/203"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "MSE 205",
    "name": "Mechanical Behavior of Materials",
    "instructor": "Sriharitha Rowthu(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/205"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/205"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "MSE Lab"
      }
    ]
  },
  {
    "code": "MSE 206",
    "name": "Physics of Materials",
    "instructor": "Gopinadhan Kalon(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/103"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/103"
      }
    ]
  },
  {
    "code": "MSE 207",
    "name": "Structure of Materials",
    "instructor": "Anagh Bhaumik(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/210"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/210"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "MSE 210",
    "name": "Microstructural Engineering",
    "instructor": "Prafull Pandey(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/105"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "MSE Lab"
      }
    ]
  },
  {
    "code": "EE 224",
    "name": "Power Systems",
    "instructor": "Naran Pindoriya(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/208"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/208"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/102,7/107"
      }
    ]
  },
  {
    "code": "ES 245",
    "name": "Control Systems",
    "instructor": "S Rajendran(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/202,7/108,7/109"
      }
    ]
  },
  {
    "code": "ES 301",
    "name": "Data Structures and Algorithms II",
    "instructor": "Manoj Gupta(I+T),Neeldhara Misra (T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Jagdish Patel Learning Theatre,7/205,7/110"
      }
    ]
  },
  {
    "code": "ES 336",
    "name": "Computer Organization & Architecture",
    "instructor": "Sameer Kulkarni(I+T),Joycee Mekie(T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "CS 328",
    "name": "Introduction to Data Science",
    "instructor": "Anirban Dasgupta(I+T),Neeldhara Misra(T),Yogesh Meena(T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/103,11/101,11/102"
      }
    ]
  },
  {
    "code": "ES 335",
    "name": "Machine Learning",
    "instructor": "Krishna Miyapuram(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "ES 336",
    "name": "Computer Organization & Architecture",
    "instructor": "Sameer Kulkarni(I+T),Joycee Mekie(T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "CL 316",
    "name": "Separation Processes - II",
    "instructor": "Karthik Subramaniam(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/107"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/107"
      }
    ]
  },
  {
    "code": "CL 317",
    "name": "Process Synthesis, Design, and Simulation",
    "instructor": "Hari Ganesh(I+L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/202"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/104"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/104"
      }
    ]
  },
  {
    "code": "CL 325",
    "name": "Transport Phenomena",
    "instructor": "Nitin Padhiyar(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/102"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "CL 327",
    "name": "Integrated Chemical Engineering Lab-II",
    "instructor": "Kaustubh Rane(L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "CL Lab"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "CL Lab"
      }
    ]
  },
  {
    "code": "CE 313",
    "name": "Environmental Science and Engineering",
    "instructor": "Sameer Patel(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/108"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "CE 311",
    "name": "Design of Reinforced Concrete Structures",
    "instructor": "Gaurav Srivastava(I+T),Siva Chopeperla(T+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/103"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/103"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/206,7/102"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "CE Lab"
      }
    ]
  },
  {
    "code": "CE 314",
    "name": "Geotechnical Engineering",
    "instructor": "SR Gandhi(I+T),Ajanta Sachan(L)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/206"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/206"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "CE Lab"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "CE Lab"
      }
    ]
  },
  {
    "code": "CE 403",
    "name": "Construction Technology & Management",
    "instructor": "Amarjit Singh(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/209"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/209"
      }
    ]
  },
  {
    "code": "ES 336",
    "name": "Computer Organization & Architecture",
    "instructor": "Sameer Kulkarni(I+T),Joycee Mekie(T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jasubhai Auditorium"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/101,7/209, 11/101,7/209, 11/102,Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "EE 313",
    "name": "Communication Systems",
    "instructor": "Raghunandan M. Rao(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/208"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/208"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/209"
      }
    ]
  },
  {
    "code": "EE 341",
    "name": "Communication Systems",
    "instructor": "Raghunandan M. Rao(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "ME 335",
    "name": "Synthesis and Analysis of Mechanisms",
    "instructor": "Vineet Vashista(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/208"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/208"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Makers Bhavan"
      }
    ]
  },
  {
    "code": "ME 337",
    "name": "Mechanical Systems Design",
    "instructor": "Prabhat Munshi(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/109"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "ES 337",
    "name": "Energy Systems",
    "instructor": "Atul Bhargav(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jagdish Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "MSE 312",
    "name": "Materials and Environment",
    "instructor": "Pradipta Ghosh(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "MSE 316",
    "name": "Corrosion and Degradation of Materials",
    "instructor": "Amit Arora(I+T+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/110"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/110"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/110"
      },
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "MSE Lab"
      }
    ]
  },
  {
    "code": "ES 404",
    "name": "Networks and Complex Systems",
    "instructor": "Udit Bhatia(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/207,7/110"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/207,7/110"
      }
    ]
  },
  {
    "code": "CE 602",
    "name": "Analysis and Design of Foundation Systems",
    "instructor": "Amit Prashant(I),Ajanta Sachan(L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/207"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/207"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "CE Lab"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "CE Lab"
      }
    ]
  },
  {
    "code": "CE 605",
    "name": "Remote Sensing of Land and Water Resources",
    "instructor": "Vimal Mishra(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/101"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "CE 615",
    "name": "Structural Design for Fire",
    "instructor": "Gaurav Srivastava(I),S Chandrasekaran(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/107"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/107"
      }
    ]
  },
  {
    "code": "CE 628",
    "name": "Applied Hydraulic Transients",
    "instructor": "Pranab Mohapatra(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "13/124"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "CE 629",
    "name": "Geosynthetics",
    "instructor": "GV Rao(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "13/124"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "CE 632",
    "name": "Advanced Concrete Design",
    "instructor": "Dhiman Basu(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/204"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/204"
      }
    ]
  },
  {
    "code": "CE 636",
    "name": "Traffic and Roadway Engineering",
    "instructor": "Sushobhan Sen(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/206"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/206"
      }
    ]
  },
  {
    "code": "CE 639",
    "name": "AI for Civil Engineering",
    "instructor": "Udit Bhatia(I),Sushobhan Sen(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/104"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/104"
      }
    ]
  },
  {
    "code": "CE 691-I",
    "name": "Special Topics in Civil Engineering: Design for Dynamic Loads",
    "instructor": "Manish Kumar(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "13/124"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "CE 691-V",
    "name": "Special Topics in Civil Engineering: Geotechnical Infrastructure Projects",
    "instructor": "SR Gandhi(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/203"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "CE 691-VII",
    "name": "Special Topics: Drinking Water Treatment : Engineering Practices",
    "instructor": "Sudhir Arora(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/102"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "CL 605",
    "name": "Colloidal Domain: Where Science Meets Engineering",
    "instructor": "Prachi Thareja(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/202"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "CL 353",
    "name": "Introduction to Process Safety",
    "instructor": "Chinmay Ghoroi(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "ES 617",
    "name": "Design of Experiments",
    "instructor": "Nitin Padhiyar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/102"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "CL 627",
    "name": "Particulate Solids: Processing & Surface Engineering",
    "instructor": "Chinmay Ghoroi(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/103"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/103"
      }
    ]
  },
  {
    "code": "CL 629",
    "name": "Fundamentals of Aerosol Science",
    "instructor": "Sameer Patel(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/101"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "CL 628",
    "name": "Liquid State Theory",
    "instructor": "Kaustubh Rane(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/102"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/102"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "CL 630",
    "name": "Catalyst Design for Heterogeneous Reactions",
    "instructor": "Abinaya Sampath(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/201"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/201"
      }
    ]
  },
  {
    "code": "CL 631",
    "name": "Pharmaceutical Crystallization",
    "instructor": "Sameer Dalvi(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/206"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/206"
      }
    ]
  },
  {
    "code": "CL 632",
    "name": "Advanced Separation Processes",
    "instructor": "TBD1(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/206"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/206"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "CL 633",
    "name": "Applications of AI in Chemical Engineering",
    "instructor": "TBD2(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/102"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/102"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "ES 658",
    "name": "Molecular Simulations \u2013 Theory and Applications",
    "instructor": "Mithun Radhakrishna(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/108"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/108"
      },
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "CH 203",
    "name": "Fundamentals and Applications of Spectroscopy",
    "instructor": "Sairam Swaroop Mallajosyula(I),Saumyakanti Khatua(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "CH 503",
    "name": "Fundamentals of Analytical Chemistry",
    "instructor": "Bhaskar Datta(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/104"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/104"
      }
    ]
  },
  {
    "code": "CH 512",
    "name": "Reactions and Mechanisms in Organic Chemistry",
    "instructor": "Chandrakumar Appayee(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/108"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "CH 522",
    "name": "Inorganic Chemistry Laboratory",
    "instructor": "Biswajit Mondal(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "CH Lab"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "CH Lab"
      }
    ]
  },
  {
    "code": "CH 523",
    "name": "Organic Chemistry Laboratory",
    "instructor": "Chandrakumar Appayee(I)",
    "slots": [
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "CH Lab"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "CH Lab"
      }
    ]
  },
  {
    "code": "CH 524",
    "name": "Analytical and Computational Chemistry Laboratory",
    "instructor": "Anirban Mondal(I+L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/104"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/104"
      }
    ]
  },
  {
    "code": "CH 525",
    "name": "Physical Chemistry Laboratory",
    "instructor": "Manisha Samanta(I+L)",
    "slots": [
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "CH Lab"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "CH Lab"
      }
    ]
  },
  {
    "code": "CH 526",
    "name": "Group theory and spectroscopy",
    "instructor": "Partha Pratim Roy(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/110"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "CH 527",
    "name": "Organometallic Chemistry",
    "instructor": "Iti Gupta(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/206"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/206"
      }
    ]
  },
  {
    "code": "CH 591-I",
    "name": "Special Topics in Chemistry: Introduction to Polymer Chemistry",
    "instructor": "Kuljeet Kaur(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/104"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/104"
      }
    ]
  },
  {
    "code": "CH 592-I",
    "name": "Chemical biology in space (Special topics course)",
    "instructor": "Kasthuri Venkat(I),Sivapriya Kirubakaran(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/204,11/205"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/204,11/205"
      }
    ]
  },
  {
    "code": "CH 602",
    "name": "Chemistry of Natural Products",
    "instructor": "Sudipta Basu(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/110"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "CH 615",
    "name": "Electrochemistry",
    "instructor": "Biswajit Mondal(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/205"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/205"
      }
    ]
  },
  {
    "code": "CH 628",
    "name": "Fluorescence Spectroscopy for Chemists and Biologists",
    "instructor": "Sriram Kanvah(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "CH 629",
    "name": "Medicinal Chemistry for Life",
    "instructor": "Sivapriya Kirubakaran(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "13/124"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "CH 630",
    "name": "Catalytic Chemistry",
    "instructor": "Sudhanshu Sharma(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/102"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/102"
      }
    ]
  },
  {
    "code": "CH 632",
    "name": "Solid State Chemistry and Applications",
    "instructor": "Sudhanshu Sharma(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Harsha Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Harsha Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "CH 633",
    "name": "Single Molecule Spectroscopy",
    "instructor": "Saumyakanti Khatua(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/101"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "CH Lab"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "CH Lab"
      }
    ]
  },
  {
    "code": "CH 634",
    "name": "Introduction to Molecular Dynamics",
    "instructor": "Sairam Mallajosyula(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/210"
      },
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/104"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/104"
      }
    ]
  },
  {
    "code": "CH 638",
    "name": "Electronic Structure Theory",
    "instructor": "Anirban Mondal(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/206"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/206"
      }
    ]
  },
  {
    "code": "CH 639",
    "name": "Advanced Main Group Chemistry",
    "instructor": "Priyabrata Ghana(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/105"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "CH 642",
    "name": "Non-linear Spectroscopy and its Applications",
    "instructor": "Partha Pratim Roy(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/103"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/103"
      }
    ]
  },
  {
    "code": "MA 513",
    "name": "AI and Mathematics",
    "instructor": "Aditya Nema(I+T),Madhu Gupta(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/205"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/205"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/205"
      }
    ]
  },
  {
    "code": "MA 502",
    "name": "Complex Analysis",
    "instructor": "Sanjay Amrutiya(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/203"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/203"
      },
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "MA 507",
    "name": "Ordinary Differential Equations",
    "instructor": "Tanya Srivastava(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/109"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "MA 606",
    "name": "Differential Topology",
    "instructor": "Arnab Saha(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/102"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "MA 629 (A)",
    "name": "Real analysis of several variables",
    "instructor": "Rohit Kumar Mishra(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/108"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/108"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "MA 637",
    "name": "Numerical Analysis and Computing",
    "instructor": "Madhu Gupta(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/209"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/209"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/203"
      }
    ]
  },
  {
    "code": "MA 625",
    "name": "Stochastic Differential Equations",
    "instructor": "Chetan Pahlajani(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/110"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "MA 628",
    "name": "Algebra II",
    "instructor": "Indranath Sengupta(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "5/202"
      }
    ]
  },
  {
    "code": "MA 634",
    "name": "Algebraic Number theory",
    "instructor": "Akshaa Vatwani(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/103"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/103"
      }
    ]
  },
  {
    "code": "MA 638",
    "name": "Matrix Lie Groups",
    "instructor": "Bipul Saurabh(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/205"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/205"
      }
    ]
  },
  {
    "code": "MA 639",
    "name": "Matrix Analysis",
    "instructor": "Projesh Nath Choudhury(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/208"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "MA 645",
    "name": "Commutative Algebra II",
    "instructor": "Jugal K Verma(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/105"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/203"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "MA 646",
    "name": "Modular Forms",
    "instructor": "Atul Dixit(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/202"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "MA 691-IV",
    "name": "Elliptic cruves and surfaces",
    "instructor": "Tanya Srivastava(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/108"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "MA 691-V",
    "name": "Commutative Algebra - II",
    "instructor": "Jugal K Verma(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/105"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "MA 691-VII",
    "name": "Special Topics in Mathematics: Hermitian Analysis",
    "instructor": "Gadadhar Misra(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/102"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/102"
      },
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "PH 409",
    "name": "Introduction to Astronomy and Space Science",
    "instructor": "Urjit Yajnik(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/101"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "PH 653",
    "name": "Advanced Condensed Matter Physics",
    "instructor": "Abhisek Samanta(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/210"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/210"
      }
    ]
  },
  {
    "code": "PH 504",
    "name": "Quantum Mechanics II",
    "instructor": "Arpan Bhattacharyya(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/102"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/102"
      },
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "PH 506",
    "name": "Methods of Experimental Physics",
    "instructor": "Krishnakanti Dey(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/107"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "PH Lab"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "PH Lab"
      }
    ]
  },
  {
    "code": "PH 507",
    "name": "Statistical Mechanics",
    "instructor": "Ravinder Puri(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/108"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/108"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "PH 509 (N)",
    "name": "Computational Physics",
    "instructor": "Anand Sengupta(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/109"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/109"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/204"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/204"
      }
    ]
  },
  {
    "code": "PH 513",
    "name": "Electronic Devices & Digital Systems for Physicists",
    "instructor": "Krista Khaingte(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/204"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/204"
      }
    ]
  },
  {
    "code": "PH 514",
    "name": "AI in Physics",
    "instructor": "Naveen Sisodia(I+L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/209"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/209"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/209"
      }
    ]
  },
  {
    "code": "PH 607",
    "name": "Topics in Quantum and Statistical Mechanics",
    "instructor": "Ravinder Puri(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/206"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/206"
      }
    ]
  },
  {
    "code": "PH 608",
    "name": "Tools of Theoretical Physics",
    "instructor": "Vinod Chandra(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/205"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/205"
      }
    ]
  },
  {
    "code": "PH 612",
    "name": "Quantum Field Theory-II",
    "instructor": "Baradhwaj Coleppa(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "5/202"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "5/202"
      }
    ]
  },
  {
    "code": "PH 615",
    "name": "Physics of two-dimensional materials",
    "instructor": "Gopinadhan Kalon(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/207"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "PH 616",
    "name": "Quantum Optics",
    "instructor": "Prasanna Venkatesh(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/206"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/206"
      }
    ]
  },
  {
    "code": "PH 644",
    "name": "Tools of Experimental Physics",
    "instructor": "Rupak Banerjee(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/110"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "PH 649",
    "name": "Advanced General Relativity",
    "instructor": "Sudipta Sarkar(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/205"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/205"
      }
    ]
  },
  {
    "code": "PH 691-V",
    "name": "Special Topics in Physics: Effective Field Theory",
    "instructor": "Pinaki Banerjee(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/206"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/206"
      }
    ]
  },
  {
    "code": "FP 602 (CH)",
    "name": "Writing Course in Chemistry",
    "instructor": "Sriram Kanvah(I+L), Manisha Samanta(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "FP 602 (PH)",
    "name": "Writing Course in Physics",
    "instructor": "Urjit Yajnik(I+L),Naveen Sisodia(L),Krista Khaingte(L)",
    "slots": [
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "HS 103",
    "name": "French Studies",
    "instructor": "Praharsh Mohanlal Patel(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/208"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "HS 111",
    "name": "Urdu script and poetry",
    "instructor": "Mohd. Mubashshir Ahsan(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/201"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/201"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/106"
      }
    ]
  },
  {
    "code": "HS 112",
    "name": "Urdu poetry interpretation",
    "instructor": "Mohd. Mubashshir Ahsan(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/102"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "HS 152",
    "name": "Japanese Language for Beginners",
    "instructor": "Sweta Mistry(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/102"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/102"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/102"
      }
    ]
  },
  {
    "code": "HS 154",
    "name": "Mandarin for Beginners",
    "instructor": "Hao-Tsung (William) Kao(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/209"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/209"
      }
    ]
  },
  {
    "code": "HS 155",
    "name": "Mandarin for Beginners - II",
    "instructor": "Hao-Tsung (William) Kao(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/102"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/102"
      }
    ]
  },
  {
    "code": "HS 192-I",
    "name": "Special Topics in HSS: Conversational English (first half)",
    "instructor": "Suneeti Phadke(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/108"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "HS 201",
    "name": "World Civilizations and Cultures",
    "instructor": "Madhumita Sengupta(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Surendra C Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "HS 223",
    "name": "Sanskrit Literature",
    "instructor": "Mana Shah(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/106"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/106"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/106"
      }
    ]
  },
  {
    "code": "HS 513",
    "name": "Perspectives in History",
    "instructor": "Madhumita Sengupta(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/204"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/204"
      }
    ]
  },
  {
    "code": "HS 514",
    "name": "Sociology of Tourism",
    "instructor": "Ambika Aiyadurai(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/101"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "HS 515",
    "name": "The Politics of the Environment",
    "instructor": "Ambika Aiyadurai(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/208"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "HS 518",
    "name": "Philosophy, Cognition and Psychoanalyis",
    "instructor": "Arka Chattopadhyay(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/102"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "HS 519",
    "name": "Linguistic Anthropology",
    "instructor": "TBD7(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/104"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/104"
      }
    ]
  },
  {
    "code": "HS 523",
    "name": "Quantitative Research Methods in Social Sciences",
    "instructor": "Deepak Singhania(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/103"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/103"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/203"
      }
    ]
  },
  {
    "code": "HS 610",
    "name": "Critical Journey  through Select Thoughts and Theories",
    "instructor": "Arnapurna Rath(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/205"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/205"
      }
    ]
  },
  {
    "code": "HS 635",
    "name": "India Through the Writer\u2019s Eye",
    "instructor": "Sharmita Lahiri(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "HS 642",
    "name": "Structures and Hydrology in Ancient India",
    "instructor": "Alok Kumar Kanungo(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/108"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "HS 650",
    "name": "Critical Perspectives in Anthropology",
    "instructor": "Ambika Aiyadurai(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/107"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/107"
      }
    ]
  },
  {
    "code": "HS 651",
    "name": "Critical Perspectives in Sociology",
    "instructor": "Tanka B. Subba(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/110"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "HS 653",
    "name": "Academic Communication: Explanation and Paraphrasing",
    "instructor": "Jooyoung Kim(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/204"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/204"
      }
    ]
  },
  {
    "code": "HS 654",
    "name": "Mixed Methods in Research",
    "instructor": "Aditi Kothiyal(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "HS 657",
    "name": "Mixed Methods in Research",
    "instructor": "Aditi Kothiyal(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "HS 691-IX",
    "name": "Decolonizing Social Sciences",
    "instructor": "Tanka B. Subba(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/205"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/205"
      }
    ]
  },
  {
    "code": "HS 691-VII",
    "name": "Special Topics in HSS: Haunting, Spectrality and Cinema",
    "instructor": "Arka Chattopadhyay(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/206"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/206"
      }
    ]
  },
  {
    "code": "HS 491-III",
    "name": "Strorytelling for the Digital Era",
    "instructor": "Arnapurna Rath(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/104"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/104"
      }
    ]
  },
  {
    "code": "HS 491-XI",
    "name": "Special Topics in HSS: Understanding and Designing Comics and Graphic Novels",
    "instructor": "Argha Manna(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/201"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/201"
      }
    ]
  },
  {
    "code": "HS 491-XIII",
    "name": "Drawing Conncetions: Enviranmental Perception and Visula Anthropology",
    "instructor": "Suman Choudhury(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/102"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "HS 491-XIV",
    "name": "Special Topics in HSS: Appreciation of Classical Indian Music",
    "instructor": "Pandit Mahendra D. Toke(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/209"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/209"
      }
    ]
  },
  {
    "code": "HS 656",
    "name": "Ethanoarchaeology",
    "instructor": "Alok Kumar Kanungo(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/203"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "HS 527",
    "name": "Environmental Economics and Natural Resource Management",
    "instructor": "Praharsh Patel(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/204"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/204"
      }
    ]
  },
  {
    "code": "IN 402",
    "name": "Human Evolution",
    "instructor": "Sharada CV(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/204"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/204"
      }
    ]
  },
  {
    "code": "HS 108",
    "name": "Japan Studies",
    "instructor": "Toshiki Osada(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/201"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/201"
      }
    ]
  },
  {
    "code": "DES 302",
    "name": "Creativity, Design and Doing",
    "instructor": "Manasi Kanetkar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Jagdish Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "DES 591-I",
    "name": "Game Apreciation and Game Aesthetics",
    "instructor": "Malay Dhamelia(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/204"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/204"
      }
    ]
  },
  {
    "code": "DES 601",
    "name": "Visual Design for Academia",
    "instructor": "Sameer Sahasrabudhe(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/101"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/203"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "DES 691-II",
    "name": "Special Topics in Design: Designing Learning environments for science and engineering",
    "instructor": "Aditi Kothiyal(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/101"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "MS 404",
    "name": "Neuromarketing (second half)",
    "instructor": "Aditi (GTF)(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "MS 306",
    "name": "Principles of Business Management",
    "instructor": "Abhijit Kothari(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/208"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "MS 491-VII",
    "name": "Special Topics in Management: Managing Sustainable Businesses",
    "instructor": "Anselm Schneider(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Surendra C Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "MS 491-XIV",
    "name": "Special Topics in Management: Consumer Behaviour",
    "instructor": "Marcos Severos(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Online"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Online"
      }
    ]
  },
  {
    "code": "MS 491-XV",
    "name": "Special Topics in Management: Medical Products Manufacturing Quality and Regulatory \n(first half)",
    "instructor": "Premalatha Chelvakumar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/207"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "MS 491-XVI",
    "name": "Special Topics in Management: Lean Six Sigma",
    "instructor": "Alok Bhatnagar(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/206"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/206"
      }
    ]
  },
  {
    "code": "MS 491-XVII",
    "name": "Special Topics in Management: Organizational Psychology",
    "instructor": "Ramachandran Veetikazhi(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/110"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "MS 492-I",
    "name": "Special Topics in Management: Strategic Leadership\n(first half)",
    "instructor": "Rajeev Sharma(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/102"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "MS 492-II",
    "name": "Special Topics in Management: Business Risk Management\n(first half)",
    "instructor": "Prerna Wadikar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/110"
      },
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "MS 491-XVIII",
    "name": "Special Topics in Management: Comprehensive Business Ethics & Responsible Leadership",
    "instructor": "Ramachandran Veetikazhi(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/102"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "MS 491-XIX",
    "name": "Special Topics in Management: Comprehensive Manufacturing Quality & Regulatory of Medical Products",
    "instructor": "Premalatha Chelvakumar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/207"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "MS 492-IV",
    "name": "Special Topics in Management: Business Ethics and Responsible Leadership (first half)",
    "instructor": "Ramachandran Veetikazhi(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/102"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "MS 492-V",
    "name": "Special Topics in Management: Essentials of Finance and Trade Laws\n(second half)",
    "instructor": "Savan Godiawala(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/102"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/102"
      }
    ]
  },
  {
    "code": "MS 492-VII",
    "name": "Special Topics in Management: International Marketing",
    "instructor": "Monika Kothari(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/208"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "HS 491-VIII",
    "name": "Special Topics in HSS: Challenges in the Digital Society",
    "instructor": "Nuno Guimaraes(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/101"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "CG 507",
    "name": "Evolutionary Neuropsychology\n(Quad 1)",
    "instructor": "Frederick Coolidge(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/202"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "BE 304",
    "name": "Introduction to Biomedical Engineering",
    "instructor": "Karla P. Mercado-Shekhar(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "BE 402",
    "name": "Biomolecular Forensics",
    "instructor": "Bhaskar Datta(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/104"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/104"
      }
    ]
  },
  {
    "code": "BE 603",
    "name": "Biophysical Techniques",
    "instructor": "Vijay Thiruvenkatam(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/206"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/206"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "BE Lab"
      }
    ]
  },
  {
    "code": "BE 608",
    "name": "Molecular Basis of Neurodegenerative Diseases",
    "instructor": "Sharad Gupta(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "13/125"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "13/125"
      }
    ]
  },
  {
    "code": "BE 610",
    "name": "Molecular Oncology",
    "instructor": "Umashankar Singh(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "13/124"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "BE 615",
    "name": "Bioinformatics and Computational Biology",
    "instructor": "Ashutosh Srivastava(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/206"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/109"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "BE 619",
    "name": "Cellular Communication",
    "instructor": "Sharmistha Majumdar(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/105"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "BE 625",
    "name": "AI Applications in Life Sciences",
    "instructor": "Sharad Gupta(I),Ashutosh Srivastava(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/205,7/206"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/205,7/206"
      }
    ]
  },
  {
    "code": "BE 626",
    "name": "Metabolic Engineering",
    "instructor": "Ashutosh Srivastava(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "BE 627",
    "name": "Methods in Structural Biology",
    "instructor": "Vijay Thiruvenkatam(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "13/124"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "13/124"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "BE Lab"
      }
    ]
  },
  {
    "code": "BE 628",
    "name": "Transport Phenomenon in Biological Systems",
    "instructor": "Rohil Jain(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/106"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/106"
      }
    ]
  },
  {
    "code": "BE 691-I",
    "name": "Special Topics in Biological Engineering: Analysis and Characterization of Biologicals",
    "instructor": "Dhiraj Bhatia(I+L),Sharad Gupta(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/205"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "BE Lab"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "BE Lab"
      }
    ]
  },
  {
    "code": "BE 692",
    "name": "Special Topics in Biological Engineering: Animal Cell Culture Techniques",
    "instructor": "Sharmistha Majumdar(L)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "BE Lab"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "BE Lab"
      }
    ]
  },
  {
    "code": "BE 617",
    "name": "Novel Drug Delivery Technologies: Fundamental Principles and Engineering",
    "instructor": "Mukesh Dhanka(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "BE 692-I",
    "name": "Special Topics in Biological Engineering: Nucleic Acids Based Therapeutics (first half)",
    "instructor": "Dhiraj Bhatia(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/108"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "BE 692-II",
    "name": "Special Topics in Biological Engineering: Medical Device Regulations (second half)",
    "instructor": "Karla P. Mercado-Shekhar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Jagdish Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "BE 692-III",
    "name": "Special Topics in Biological Engineering: Plant Developmental Biology (first half)",
    "instructor": "Subramanian Sankaranarayanan(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/207"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "CG 506",
    "name": "Experimental Techniques in Cognitive Science",
    "instructor": "Krishna Miyapuram(I),Leslee Lazar(L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/203"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/108"
      }
    ]
  },
  {
    "code": "CG 507",
    "name": "Evolutionary Neuropsychology\n(Quad 1)",
    "instructor": "Frederick Coolidge(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/202"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "CG 517",
    "name": "Introduction to Cognitive Linguistics",
    "instructor": "Jooyoung Kim(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "CG 601",
    "name": "Motor Learning and Memory",
    "instructor": "Pratik Mutha(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/110"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "CG 603",
    "name": "Perception and Attention",
    "instructor": "Meera Mary Sunny(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/106"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/106"
      }
    ]
  },
  {
    "code": "CG 605",
    "name": "Learning and Memory",
    "instructor": "Leslee Lazar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/105"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "CG 607",
    "name": "Emotion and Cognition",
    "instructor": "Meera Mary Sunny(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/106"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/106"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "CG 614",
    "name": "Human Brain Mapping",
    "instructor": "Vaibhav Tripathi(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/203"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/203"
      }
    ]
  },
  {
    "code": "ES 248",
    "name": "Introduction to Data Structures and Algorithms",
    "instructor": "Anup Kalbalia(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/101"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/203"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "10/203"
      }
    ]
  },
  {
    "code": "CS 327",
    "name": "Compilers",
    "instructor": "Shouvick Mondal(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/203,10/204"
      }
    ]
  },
  {
    "code": "CS 328",
    "name": "Introduction to Data Science",
    "instructor": "Anirban Dasgupta(I+T),Neeldhara Misra(T),Yogesh Meena(T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/103,11/101,11/102"
      }
    ]
  },
  {
    "code": "ES 335",
    "name": "Machine Learning",
    "instructor": "Krishna Miyapuram(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "ES 335",
    "name": "Machine Learning",
    "instructor": "Krishna Miyapuram(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "ES 678",
    "name": "Machine Learning",
    "instructor": "Krishna Miyapuram(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      },
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103,Jayshree S Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "CS 614",
    "name": "Advanced Algorithms",
    "instructor": "Neeldhara Misra(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/110"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/110"
      }
    ]
  },
  {
    "code": "CS 616",
    "name": "Distributed Systems and Cloud Computing",
    "instructor": "Abhishek Bichawat(I+L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/103"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/103"
      },
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/104"
      }
    ]
  },
  {
    "code": "CS 617",
    "name": "Computational Complexity Theory",
    "instructor": "Balagopal Komarath(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "13/125"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "13/125"
      }
    ]
  },
  {
    "code": "ES 667",
    "name": "Deep Learning",
    "instructor": "Anirban Dasgupta(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/208"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "ES 670",
    "name": "Matrix Methods for Signal Processing, Data Science,\nand Machine Learning",
    "instructor": "Shanmuganathan Raman(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/101"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "CS 333",
    "name": "Ethics of AI",
    "instructor": "Manisha Padala(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/101"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "CS 431",
    "name": "Computer and Network Security",
    "instructor": "Abhishek Bichawat(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/109"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "CS 432",
    "name": "Databases",
    "instructor": "Yogesh Meena(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/103"
      }
    ]
  },
  {
    "code": "CS 436",
    "name": "History of Computing and its Applications to Domains\n(second half)",
    "instructor": "Rajat Moona(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "Surendra C Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "CS 621",
    "name": "Ethics of AI (N)",
    "instructor": "Manisha Padala(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/208"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/208"
      }
    ]
  },
  {
    "code": "CS 691-XX",
    "name": "Special Topics in Computer Science: Cyber Physical Systems for Industrial Applications",
    "instructor": "Abhishek Bichhawat(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "ES 333",
    "name": "Microprocessors and Embedded Systems",
    "instructor": "Jhuma Saha(I+T+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "EE Lab"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "EE Lab"
      }
    ]
  },
  {
    "code": "EE 609",
    "name": "Advanced Signal Processing",
    "instructor": "Nithin George(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/204"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/204"
      }
    ]
  },
  {
    "code": "ES 612",
    "name": "Artificial Intelligence",
    "instructor": "Uttama Lahiri(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/101"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "EE 618",
    "name": "Microelectronics Lab",
    "instructor": "Jhuma Saha(L)",
    "slots": [
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/104"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/104"
      }
    ]
  },
  {
    "code": "EE 619",
    "name": "Special Electrical Machines",
    "instructor": "Ragavan K(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/102"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/102"
      }
    ]
  },
  {
    "code": "EE 629",
    "name": "Power Electronic Converters",
    "instructor": "S Rajendran(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/102"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/102"
      },
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/102"
      }
    ]
  },
  {
    "code": "EE 639",
    "name": "Lasers",
    "instructor": "Arup Chakraborty(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "13/125"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "13/125"
      }
    ]
  },
  {
    "code": "EE 652",
    "name": "IC Design Laboratory",
    "instructor": "Joycee Mekie(L)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/105"
      }
    ]
  },
  {
    "code": "EE 653",
    "name": "Analog IC Design Lab",
    "instructor": "Madhav Pathak(L)",
    "slots": [
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/104"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/104"
      }
    ]
  },
  {
    "code": "ES 641",
    "name": "Electronic Instrumentation",
    "instructor": "Uttama Lahiri(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "13/124"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "EE 691-V",
    "name": "Regulation of Electricity Sector",
    "instructor": "Anand Kumar(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Surendra C Sheth Learning Theatre"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Surendra C Sheth Learning Theatre"
      }
    ]
  },
  {
    "code": "ES 655",
    "name": "Medical Imaging Systems",
    "instructor": "Himanshu Shekhar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/210"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/210"
      }
    ]
  },
  {
    "code": "EE 657",
    "name": "VLSI System Design",
    "instructor": "Dinesh Sharma(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/101"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/101"
      }
    ]
  },
  {
    "code": "EE 658",
    "name": "Memory Device Technologies and Applications",
    "instructor": "Sandip Lashkare(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/102"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "EE 660",
    "name": "Power Management IC Design",
    "instructor": "Madhav Pathak(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/206"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/206"
      }
    ]
  },
  {
    "code": "ES 665",
    "name": "Advanced Transportation Electrification Technology",
    "instructor": "Pallavi Bharadwaj(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/102"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "EE 668",
    "name": "Smart Power Distribution System",
    "instructor": "Naran Pindoriya(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "13/124"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "13/124"
      }
    ]
  },
  {
    "code": "ES 677",
    "name": "Physics inspired Machine Learning for Engineering Design",
    "instructor": "Ravi Hegde(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/105"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "13/125"
      }
    ]
  },
  {
    "code": "EE 665",
    "name": "Advanced Radiating Systems",
    "instructor": "Kamla Prasan Ray(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/205"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/205"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/205"
      }
    ]
  },
  {
    "code": "EE 666",
    "name": "Fundamentals of Wireless Localization",
    "instructor": "Raghunandan M. Rao(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/103"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/103"
      }
    ]
  },
  {
    "code": "EE 669",
    "name": "Advanced Semiconductor Devices",
    "instructor": "Jhuma Saha(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/204"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/204"
      }
    ]
  },
  {
    "code": "EE 667",
    "name": "Quantum Error Correction",
    "instructor": "Aditya Nema(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/210"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/210"
      }
    ]
  },
  {
    "code": "EE 670",
    "name": "AI for Electrical Engineering",
    "instructor": "Uttama Lahiri(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/102"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/102"
      }
    ]
  },
  {
    "code": "ES 676",
    "name": "Classical Information Theory",
    "instructor": "Aditya Nema(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/205"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/205"
      }
    ]
  },
  {
    "code": "EH 304",
    "name": "Drone Data Acquisition, Processing and Interpretation",
    "instructor": "Pankaj Khanna(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/104"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/105"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "10/105"
      }
    ]
  },
  {
    "code": "EH 601 (N)",
    "name": "Earth Surface Processes in The Anthropocene",
    "instructor": "Vikrant Jain(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/103"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/103"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "10/102"
      }
    ]
  },
  {
    "code": "EH 602",
    "name": "River Morphology and Ecology",
    "instructor": "Vikrant Jain(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/103"
      },
      {
        "day": "Friday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/103"
      }
    ]
  },
  {
    "code": "EH 604",
    "name": "Quantitative Geomorphology",
    "instructor": "R. N. Singh(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/206"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/206"
      }
    ]
  },
  {
    "code": "EH 608",
    "name": "Biodiversity Conservation and Sustainable Development",
    "instructor": "C. N. Pandey(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/107"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/107"
      }
    ]
  },
  {
    "code": "EH 610",
    "name": "Engineering Seismology and Seismic Hazard Analysis",
    "instructor": "Utsav Mannu(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/210"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/210"
      }
    ]
  },
  {
    "code": "EH 612",
    "name": "Ocean and Global Change",
    "instructor": "Pankaj Khanna(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "10/103"
      }
    ]
  },
  {
    "code": "EH 614",
    "name": "Physics of the Lithosphere",
    "instructor": "Utsav Mannu(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/210"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/210"
      }
    ]
  },
  {
    "code": "EH 621",
    "name": "Climate of the Past",
    "instructor": "Sonal Khanolkar(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/204"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/206"
      },
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/206"
      }
    ]
  },
  {
    "code": "EH 622",
    "name": "Fluid Flow and Reactions in Reservoir Rocks",
    "instructor": "Achyut Mishra(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/201"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/201"
      }
    ]
  },
  {
    "code": "EH 623",
    "name": "Stratigraphic Evolution of Indian Continent",
    "instructor": "Sonal Khanolkar(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/101"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/101"
      },
      {
        "day": "Tuesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "EH 629",
    "name": "Ceramics in Archaeology",
    "instructor": "V N Prabhakar(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "11/204"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/204"
      }
    ]
  },
  {
    "code": "EH 630",
    "name": "Harappan Civilization",
    "instructor": "V N Prabhakar(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/202"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "EH 632",
    "name": "Fundamentals of Structural Geology",
    "instructor": "Manab Mukherjee(I+L)",
    "slots": [
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "13/125"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "EH Lab"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "EH Lab"
      }
    ]
  },
  {
    "code": "EH 634",
    "name": "Dynamic Earth Surface and Nature Hazards",
    "instructor": "TBD4(I+L)",
    "slots": [
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/104"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "EH Lab"
      },
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "EH Lab"
      }
    ]
  },
  {
    "code": "EH 691-II",
    "name": "Atmopheric Physics",
    "instructor": "P. C. Pandey(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "10:00",
        "end": "11:20",
        "venue": "13/125"
      },
      {
        "day": "Thursday",
        "start": "08:30",
        "end": "09:50",
        "venue": "13/125"
      }
    ]
  },
  {
    "code": "EH 691-X",
    "name": "Interpreting animals in the Human past",
    "instructor": "Sharada CV(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/204"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/204"
      }
    ]
  },
  {
    "code": "EH 691-XI",
    "name": "Special Topics in Earth Sciences: Stable Isotopes in Earth Systems",
    "instructor": "R. D. Deshpande(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "13/125"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "13/125"
      }
    ]
  },
  {
    "code": "ES 419",
    "name": "Numerical Methods for Engineers",
    "instructor": "Ravi Ayyagari(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/104"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/104"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "10/105"
      }
    ]
  },
  {
    "code": "ES 646",
    "name": "Elastodynamics and Vibrations",
    "instructor": "Jayaprakash K. R.(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/101"
      },
      {
        "day": "Thursday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/101"
      }
    ]
  },
  {
    "code": "ES 648",
    "name": "Nonlinear Dynamics and Vibrations",
    "instructor": "Jayaprakash K. R.(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/104"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/104"
      }
    ]
  },
  {
    "code": "ES 613",
    "name": "Modern Control Theory",
    "instructor": "Madhu Vadali(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/204"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/204"
      }
    ]
  },
  {
    "code": "ES 656",
    "name": "Human Robot Interaction",
    "instructor": "Vineet Vashista(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/105"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/105"
      }
    ]
  },
  {
    "code": "ES 671",
    "name": "Mechanics of Composite Materials",
    "instructor": "Harini Subramanian(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/207"
      },
      {
        "day": "Friday",
        "start": "10:00",
        "end": "11:20",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "ME 462",
    "name": "Integrated Design and Manufacturing",
    "instructor": "Rakesh Singhai(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/107"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/107"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/107"
      }
    ]
  },
  {
    "code": "ME 628",
    "name": "Advanced Fluid Mechanics",
    "instructor": "Vinod Narayanan(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/102"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/102"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "ES 632",
    "name": "Energy Systems",
    "instructor": "Atul Bhargav(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jagdish Patel Learning Theatre"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "Jagdish Patel Learning Theatre"
      }
    ]
  },
  {
    "code": "ME 691-X",
    "name": "Special Topics in Mechanical Engineering: Mechanics of Elastic Rods",
    "instructor": "Harmeet Singh(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/106"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/106"
      }
    ]
  },
  {
    "code": "ME 691-XIX",
    "name": "Special Topics in Mechanical Engineering: Introduction to Computational Solid Mechanics",
    "instructor": "Harkirat Singh(I+T)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/109"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/109"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/109"
      }
    ]
  },
  {
    "code": "ME 691-XX",
    "name": "Special Topics in Mechanical Engineering: Introduction to Conduction and Radiation Heat Transfer",
    "instructor": "Lokesh Malik(I+T)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/205"
      },
      {
        "day": "Friday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/205"
      },
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/201"
      }
    ]
  },
  {
    "code": "ME 691-XXI",
    "name": "Special Topics in Mechanical Engineering: Mechatronics Design Studio",
    "instructor": "Madhu Vadali(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "Makers Bhavan"
      },
      {
        "day": "Monday",
        "start": "15:30",
        "end": "16:50",
        "venue": "Makers Bhavan"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "Makers Bhavan"
      }
    ]
  },
  {
    "code": "ME 691-XIV",
    "name": "Special Topics in Mechanical Engineering: Mathematical Tools for Mechanical Engineers",
    "instructor": "Uddipta Ghosh(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/207"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/207"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "ME 691-XV",
    "name": "Special Topics in Mechanical Engineering: Advanced Nonlinear Dynamics",
    "instructor": "Jayaprakash K. R.(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/102"
      },
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/102"
      }
    ]
  },
  {
    "code": "ME 643",
    "name": "Aircraft and Rocket Propulsion",
    "instructor": "Dilip Sundaram(I+L)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/202"
      },
      {
        "day": "Friday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/202"
      }
    ]
  },
  {
    "code": "ME 647",
    "name": "Vapor Liquid Phase Change Phenomena",
    "instructor": "Soumyadip Sett(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "6:30 PM to 7:50 PM, 7/104"
      }
    ]
  },
  {
    "code": "ME 649",
    "name": "Mathematical Tools for Mechanical Engineers-II",
    "instructor": "Uddipta Ghosh(I+T)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/207"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "7/207"
      },
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "7/207"
      }
    ]
  },
  {
    "code": "ME 692-VII",
    "name": "Special Topics in Mechanical Engineering: Data and Observer Design (first half)",
    "instructor": "Ravi Banavar(I+L)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "14:00",
        "end": "15:20",
        "venue": "7/206"
      },
      {
        "day": "Thursday",
        "start": "14:00",
        "end": "15:20",
        "venue": "ME Lab"
      },
      {
        "day": "Thursday",
        "start": "15:30",
        "end": "16:50",
        "venue": "ME Lab"
      }
    ]
  },
  {
    "code": "MSE 355",
    "name": "Surface Engineering",
    "instructor": "Sriharitha Rowthu(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/204"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/204"
      }
    ]
  },
  {
    "code": "MSE 404",
    "name": "Diffraction Methods for Structure and Stress Analysis",
    "instructor": "Pradipta Ghosh(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/205"
      },
      {
        "day": "Thursday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/205"
      }
    ]
  },
  {
    "code": "MSE 603",
    "name": "Thin Film Processing and Characterization",
    "instructor": "Emila Panda(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/205"
      },
      {
        "day": "Wednesday",
        "start": "08:30",
        "end": "09:50",
        "venue": "11/205"
      }
    ]
  },
  {
    "code": "MSE 605",
    "name": "Biomaterials for Tissue Regeneration",
    "instructor": "Superb Misra(I)",
    "slots": [
      {
        "day": "Wednesday",
        "start": "10:00",
        "end": "11:20",
        "venue": "11/205"
      },
      {
        "day": "Friday",
        "start": "14:00",
        "end": "15:20",
        "venue": "11/205"
      }
    ]
  },
  {
    "code": "MSE 621",
    "name": "Process Plant Design \u2013 How to Set Up a Process Industry",
    "instructor": "Surya P Mehrotra(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/106"
      },
      {
        "day": "Thursday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/106"
      }
    ]
  },
  {
    "code": "ES 623 (N)",
    "name": "Biomolecular Materials Science",
    "instructor": "Abhijit Mishra(I)",
    "slots": [
      {
        "day": "Tuesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/106"
      },
      {
        "day": "Friday",
        "start": "11:30",
        "end": "12:50",
        "venue": "7/106"
      }
    ]
  },
  {
    "code": "MSE 634",
    "name": "Semiconductor Materials and Fabrication Process",
    "instructor": "Anagh Bhaumik(I)",
    "slots": [
      {
        "day": "Monday",
        "start": "17:00",
        "end": "18:20",
        "venue": "11/102"
      },
      {
        "day": "Wednesday",
        "start": "11:30",
        "end": "12:50",
        "venue": "11/102"
      }
    ]
  }
];