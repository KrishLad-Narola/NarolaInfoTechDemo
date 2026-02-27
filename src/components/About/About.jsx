export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./Images/tailus.io.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                           Narola Infotech is a global IT solution provider company in India with over 20 years of competitive business experience in niche industries. 
                           They offer custom web and mobile app design and development, backend development, enterprise services
                            and CMS website development. 
                           Narola Infotech is known for its expertise in popular technologies such as PHP, ASP.NET, C#, 
                           Java, Ruby on Rails, and Python. They provide end-to-end support for all their projects and
                            have worked on more than 2500+ projects across various industries including finance, health care, hospitality, manufacturing, education, retail, communication, social media, and eCommerce. 
                        </p>
                        <p className="mt-4 text-gray-600">
                          Narola Infotech is a private unlisted company incorporated on April 16, 2013, and is classified as 'company limited by shares'. 
                          They are proficient in providing web application development, automation, machine learning, and other IT services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}