import type { APIRoute } from "astro"
import {Resend} from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)


export const POST:APIRoute = async ({params, request}) => {
  const body = await request.json()
  const {from, to, subject, text, html} = body

  if(!from || !to || !subject || !text || !html){
    return new Response(
      JSON.stringify({
       message: "All fields are required",
      }), 
      { 
        status: 400,
        statusText: "Bad Request"
      }
    )
  }

  const send = await resend.emails.send({
    from,
    to,
    subject,
    text,
    html,
  })

  if(!send?.data){
    return new Response(
      JSON.stringify({
       message: send.error,
      }), 
      { 
        status: 500,
        statusText: "Internal Server Error"
      }
    )
  }

  return new Response(
       JSON.stringify({
       message: send.data
      }),
      { 
        status: 200,
        statusText: "OK"
      }
  )
}