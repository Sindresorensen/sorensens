import ContactsTable from "@/components/contact/ContactsTable";
import Title from "@/components/general/Title";
import { Card, CardContent } from "@/components/ui/card";


export type ContactsType = {
    name: string;
    phone: string;
    role?: string;
}

const contacts: ContactsType[] = [
    { name: "Sindre Sørensen", phone: "472 65 774" },
    { name: "Hanna Jess Tjøstheim", phone: "472 72 840" },
    { name: "Vegard Godtfredsen", phone: "412 11 824", role: "Toastmaster" },
    { name: "Marie Tjelle", phone: "475 23 101", role: "Toastmaster" }
]

export default function Contact() {

    return (
        <div className=" z-0 h-full w-full">
            <div className="absolute flex flex-col items-center w-full z-10 gap-8 md:gap-16">
                <div className="flex flex-col items-center mt-24 w-full gap-6 ">
                    <Title>Kontakt</Title>
                </div>
                <Card className="rounded-sm w-11/12 sm:w-1/3">
                    <CardContent className="p-0">
                        <div className="flex flex-col m-4">
                            <ContactsTable contacts={contacts} />
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}