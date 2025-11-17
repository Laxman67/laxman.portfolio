const GetInTouchLink = ({ socialLinks }) => {
  return (
    <div className="flex gap-6 justify-center text-gray-400">
      {socialLinks?.map((link, index) => (
        <a
          key={index}
          target="_blank"
          href={link.link}
          className="hover:text-purple-400 transition-colors transform hover:scale-110"
        >
          <link.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default GetInTouchLink;
