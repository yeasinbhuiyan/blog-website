/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

// {
//     "job_id": "job001",
//     "title": "Software Engineer",
//     "company": "ABC Tech",
//     "location": "San Francisco, CA",
//     "salary": "$100,000 - $120,000",
//     "description": "ABC Tech is seeking a talented Software Engineer to join our team...",
//     "requirements": [
//       "Bachelor's degree in Computer Science or related field",
//       "Proficient in Java and Python",
//       "Experience with web development frameworks such as React or Angular",
//       "Strong problem-solving skills"
//     ]
//   },
// eslint-disable-next-line no-unused-vars
const JobsCard = ({ job }) => {

    console.log(job.requirements)
    const requirement = job.requirements
    return (
        <div className="card mx-auto w-full h-96 shadow-lg md:p-10 p-8 rounded-sm">
          <div>
          <h1 className="font-semibold text-2xl md:text-3xl">{job?.title}</h1>
            <h3>{job?.company}</h3>
            <p>{job?.location}</p>
            <p>{job?.salary}</p>

            <ul className="md:py-5  gap-5 list-disc">
                {
                    requirement.map(requirement => <li className="pt-2 text-xs md:text-sm font-medium" key={requirement}>{requirement}</li>
                    )
                }

            </ul>
            <button className="btn btn-xs absolute top-2 right-2">Apply Now </button>
          </div>




        </div>
    );
};

export default JobsCard;