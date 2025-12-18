// External dependencies
import Link from "next/link";

// Internal dependencies - UI Components
import ContactCard from "../../../../components/contact-card";
import { PiArrowUpRight } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HiDocumentDownload } from "react-icons/hi";
import type { DeveloperProfile } from "@/types/data";

interface ProfileCardProps {
  profile: DeveloperProfile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 items-stretch">
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
        <Link
          href="/about"
          className="flex flex-col justify-between gap-6 p-6 lg:p-10 xl:gap-0 bg-muted hover:bg-muted-foreground/10 transition-all duration-150 ease-[cubic-bezier(0.22, 1, 0.36, 1)] rounded-xl font-light relative group h-full"
        >
          <div className="flex gap-4 items-center">
            {/* AVATAR  */}
            <Avatar className="size-[60px]">
              <AvatarImage src={profile.avatar} alt="Avatar" />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>

            {/* NAME  */}
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-lg">{profile.name}</h1>
              <p className="text-sm text-text-muted">{profile.title}</p>
            </div>
          </div>

          <div className="lg:mt-4 xl:mt-0">
            <p className="text-text-muted text-[15px]">
              {profile.bio}
            </p>
          </div>

          <div className="absolute top-8 right-8 opacity-0 group-hover:top-6 group-hover:right-6 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <PiArrowUpRight size={18} />
          </div>
        </Link>
      </div>

      <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col justify-between gap-3">
        <ContactCard
          title="GitHub"
          href={`https://github.com/${profile.social.github}`}
          icon={<FaGithub className="w-4 h-4" />}
        />

        <ContactCard
          title="Email"
          href={`mailto:${profile.social.email}`}
          icon={<HiMail className="w-4 h-4" />}
        />

        <ContactCard
          title="Download Resume"
          href="/resume.pdf"
          icon={<HiDocumentDownload className="w-4 h-4" />}
          className="bg-primary text-white dark:text-black hover:bg-primary"
        />

        <ContactCard
          title="Contact me"
          href={`mailto:${profile.social.email}`}
          className="bg-primary text-white dark:text-black hover:bg-primary"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
