"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

interface ContactItem {
  id: number;
  Title: string;
  contactUrl: string | null;
  iconUrl: string | null;
  isUrl: boolean;
}

export default function Contact() {
  const [allContact, setAllContact] = useState<ContactItem[]>([]);

  useEffect(() => {
    async function fetchContact() {
      const contactData = await fetch("api/contact");
      if (contactData.ok) {
        const data = await contactData.json();
        setAllContact(data);
      }
    }
    fetchContact();
  }, []);

  return (
    <div style={{minHeight: "100vh" }}
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-10">
          {allContact.map((contact, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {contact.isUrl && (
                <Link
                  href={contact.contactUrl || ""}
                  passHref
                  target="_blank"
                  className="text-2xl font-bold text-center hover:text-purple-600"
                  style={{
                    background:
                      contact.Title === "Email"
                        ? "#fcd34d"
                        : contact.Title === "Phone Number"
                        ? "#70d6ff"
                        : "#ffffff",
                  }}
                >
                  {contact.iconUrl && (
                    <Image
                      src={contact.iconUrl}
                      alt=""
                      width={50}
                      height={50}
                    />
                  )}
                </Link>
              )}
              {!contact.isUrl && <span>{contact.contactUrl}</span>}
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
