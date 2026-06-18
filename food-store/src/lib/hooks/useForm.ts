import {useState, ChangeEvent} from "react";


export function useForm<T>(initialValues: T) {
    const [ formData, setFormData ] = useState<T>(initialValues);
    const [error, setError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        setError("");
    };
   

    const resetForm = () => {
        setFormData(initialValues);
    };
    return { formData, handleChange, resetForm };
}