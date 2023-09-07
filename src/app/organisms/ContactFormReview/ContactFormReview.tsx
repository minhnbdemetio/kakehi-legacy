import { Button } from '@/app/components/Button'
import { RequestConfirmForm } from '@/app/components/RequestConfirmForm'
import { RequestConfirmField } from '@/app/components/RequestConfirmForm/RequestConfirmField'
import { Routes } from '@/app/constants/routes'
import React, { useCallback, useState } from 'react'

interface IProps {
    data: {
        name: string
        companyName: string
        furigana: string
        email: string
        confirmedEmail: string
        phone: string
        content: string
    }

    onSubmit?: () => void
    submitted?: boolean
    back?: () => void

}

const ContactFormReview: React.FC<IProps> = ({ data, onSubmit, submitted, back }) => {


    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = useCallback(async () => {
        if (onSubmit) {
            setSubmitting(true)
            try {
                await onSubmit()
            } catch (e) {
                alert("エラーが発生しました!")
                console.error(e)
            } finally {
                setSubmitting(false)
            }
        }
    }, [onSubmit])


    return <div>
        <div className='contact-form pb-17.1/3'>
            <div className='pt-16.2/3'>
                {submitted ? <p className='text-xl text-center whitespace-pre'>{`以下の内容にて、お問い合わせをお受付いたしました。\n確認後に、担当者よりご連絡いたします。`}</p> : <p className='text-xl text-center'>入力した内容をご確認ください。</p>}
            </div>
            <div className='contact-form-body w-full pt-14 space-y-7 pb-24 px-33.1/3 xl:table xl:border-spacing-y-26'>
                <RequestConfirmField label="会社名" content={data.companyName} />
                <RequestConfirmField label="お名前" content={data.name} />
                <RequestConfirmField label="ふりがな" content={data.furigana} />
                <RequestConfirmField label="メールアドレス" content={data.email} />
                {!submitted && <RequestConfirmField label="メールアドレス
（確認用）" content={data.confirmedEmail} />}
                <RequestConfirmField label="電話番号" content={data.phone} />
                <RequestConfirmField multiline label="お問い合わせ内容" content={data.content} />
            </div>

            {!submitted ? (
                <div className="flex justify-center gap-7 xl:gap-14">
                    <Button onClick={back} className="relative bg-black">
                        <span>戻る</span>
                        <img
                            className="absolute left-7 top-1/2 hidden -translate-y-1/2 -scale-x-100 xl:block"
                            src="/icons/arrow-right-icon.png"
                            alt=""
                            width={50}
                            height={17}
                        />
                    </Button>
                    <Button onClick={handleSubmit} className="relative">
                        <span>{submitting ? "提出中..." : "確認する"}</span>
                        <img
                            className="absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block"
                            src="/icons/arrow-right-icon.png"
                            alt=""
                            width={50}
                            height={17}
                        />
                    </Button>
                </div>
            ) : null}
        </div>
        {submitted ? (
            <div className="mt-33.1/3 pb-33.1/3 text-center">
                <Button href={Routes.TOP}>トップページへ戻る</Button>
            </div>
        ) : null}

    </div>


}

export default ContactFormReview