import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/bhaskar2004",
      icon: <Github className="w-6 h-6" />,
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/bhaskar-t-783aa3331",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      url: "mailto:bhaskarbhaskar4794@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="max-w-md space-y-8">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a 
                      href="tel:+917676798351"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      +91 7676798351
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a 
                      href="mailto:bhaskarbhaskar4794@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      bhaskarbhaskar4794@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Connect With Me</h3>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg group"
                    aria-label={`Connect with me on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Follow me on social media for updates on my latest projects and tech insights.
              </p>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="font-semibold text-green-800">Available for opportunities</p>
              </div>
              <p className="text-green-700 text-sm">
                Open to internships, freelance projects, and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;