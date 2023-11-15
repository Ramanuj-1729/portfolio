import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">Prepared to turn your ideas into reality? I&apos;m here to help</h2>
                </div>
                <Link href="/contact">
                    <Button>Contact Me</Button>
                </Link>
            </div>
        </section>
    );
}

export default Cta;