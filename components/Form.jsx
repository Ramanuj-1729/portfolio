'use client';
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare, CheckCircle, CheckCircle2 } from "lucide-react";
import axios from "axios";
import Loader from "./Loader";

const Form = () => {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
    };
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(process.env.QUERY_URL, formData);
            setSuccess(true);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
            setFormData(initialFormData);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <Input onChange={handleInputChange} value={formData.name} type="text" name="name" id="name" placeholder="Name" required />
                <User className="absolute right-6" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Input onChange={handleInputChange} value={formData.email} type="email" name="email" id="email" placeholder="Email" required />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea onChange={handleInputChange} value={formData.message} name="message" placeholder="Type Your Message Here ..." required />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button type="submit" className="flex items-center gap-x-2 max-w[166px]">
                Let&apos;s Talk
                <ArrowRightIcon size={20} />
                {loading && <Loader />}
                {success && <CheckCircle2 />}
            </Button>
        </form>
    );
}

export default Form;