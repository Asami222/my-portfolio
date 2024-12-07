"use server";

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState,formData) {

    if(!formData) {
        return {
            status: "error",
            message: "formDataが提供されていません"
        };
    }

    const rawFormData = {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        message: formData.get("message"),
        privacy: formData.get("privacy")
    };

    const errors = {
        fullname: "",
        email: "",
        message: "",
        privacy: "",
    };

    if(!rawFormData.fullname) {
        errors.fullname = "名前を入力してください";
    }

    if(!rawFormData.email) {
        errors.email = "メールアドレスを入力してください";
    } else if (!validateEmail(rawFormData.email)) {
        errors.email = "メールアドレスの形式が誤っています";
    }

    if(!rawFormData.message) {
        errors.message = "内容を入力してください";
    }

    if(!rawFormData.privacy) {
        errors.privacy = "チェックしてください";
    }

    const hasErrors = Object.values(errors).some(error => error);
    if(hasErrors) {
        return {
            status: "error",
            errors,
        }
    }
    const result = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
        {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "fullname",
                        value: rawFormData.fullname,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: rawFormData.email,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: rawFormData.message,
                    },
                ],
            }),
        },
    );

    try {
        await result.json();
    } catch(e) {
        console.log(e);
        return {
            status: "error",
            message: "お問い合わせに失敗しました",
        }
    }

    return { status: "success", message: "OK" };

}

