
const  buttonList = ["HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Python",
  "Java",
  "C++",
  "PHP",
  "Ruby",
//   "Swift",
//   "Kotlin",
//   "Flutter",
//   "Vue.js",
//   "Angular",
//   "Bootstrap",
  "Tailwind CSS"]
const ButtonList = () => {
  return (
    <>
              <div className="py-4 ">
                    {
                          buttonList.map((item, index) => {
                                return (
                                      <button key={ index} className="px-4 py-1 mx-2 font-medium bg-gray-200 rounded-lg">
                                    {item}
                                  </button>
                                );
                          })
                    }
                    
                   
      </div>
    </>
  );
}

export default ButtonList
