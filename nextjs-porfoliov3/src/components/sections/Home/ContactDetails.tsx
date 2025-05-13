import { AtSign, Phone } from 'lucide-react';

const ContactDetails = () => {
  return (
    <div className="space-y-[25px] md:space-y-[32px] mt-[50px] md:mt-[80px]">
      <div className="space-y-4">
        <h1 className="text-[26px] font-semibold">Got questions?</h1>
        <p className="opacity-60">
          I&apos;m always excited to collaborate on innovative and exciting
          projects!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-between sm:items-center w-full">
        <div className="flex items-center gap-4 w-full">
          <div className="flex justify-center items-center gap-2">
            <div className="size-10 flex justify-center items-center rounded-full bg-[#F7F7F8] dark:bg-[#282828] text-black/60 dark:text-white/60">
              <AtSign size={20} />
            </div>
            <div>
              <p className="font-semibold opacity-60 text-[14px]">Email</p>
              <h3 className="font-medium text-[16px]">
                dadavictory2000@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="flex justify-center items-center gap-2">
            <div className="size-10 flex justify-center items-center rounded-full bg-[#F7F7F8] dark:bg-[#282828] text-black/60 dark:text-white/60">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-semibold opacity-60 text-[14px]">Phone</p>
              <h3 className="font-medium text-[15px]">+234 913 258 9516</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails