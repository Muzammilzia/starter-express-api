const testApiResoponse = [
  {
    id: 136588150,
    uri: "/api/tickets/57741470/messages/136588150/",
    message_id:
      "<170055692766.17551.10851839741559466570.57741470-136588150@helpdesk-rules-worker-d557bbb-4fxxg>",
    ticket_id: 57741470,
    external_id: "",
    public: true,
    channel: "email",
    via: "helpdesk",
    source: {
      type: "email",
      to: [
        {
          name: "muzzammil",
          address: "muzzammilzia20@gmail.com",
        },
      ],
      from: {
        name: "Nisolo Support",
        address: "ypj6x5v60d7g8zwv@email.gorgias.com",
      },
      extra: {
        include_thread: false,
      },
    },
    sender: {
      id: 267052844,
      email: "p3v1tml8@duck.com",
      name: "Coleman Brice",
      firstname: "Coleman",
      lastname: "Brice",
      meta: {
        name_set_via: "agent",
      },
    },
    integration_id: 48821,
    intents: [],
    rule_id: "",
    from_agent: true,
    receiver: {
      id: 267779566,
      email: "muzzammilzia20@gmail.com",
      name: "muzzammil",
      firstname: "muzzammil",
      lastname: "",
      meta: {
        name_set_via: "agent",
      },
    },
    subject: "",
    body_text:
      "Hey @{{ ticket.requester.name }},\n\nThank you for reaching out. We have received your request.\n\nHere are some details from the API response:\n- Account Status: {{ ticket.external_api_response}}\n- Last Login: {{ ticket.external_api_response }}\n\nIf you have any further questions, feel free to ask!\n\nBest regards,\n[Your Team Name]\n",
    body_html:
      "<div>Hey @{{ ticket.requester.name }},</div><div><br></div><div>Thank you for reaching out. We have received your request.</div><div><br></div><div>Here are some details from the API response:</div><div>- Account Status: {{ ticket.external_api_response}}</div><div>- Last Login: {{ ticket.external_api_response }}</div><div><br></div><div>If you have any further questions, feel free to ask!</div><div><br></div><div>Best regards,</div><div>[Your Team Name]</div><div><br></div>",
    stripped_text:
      "Hey @{{ ticket.requester.name }},\n\nThank you for reaching out. We have received your request.\n\nHere are some details from the API response:\n- Account Status: {{ ticket.external_api_response}}\n- Last Login: {{ ticket.external_api_response }}\n\nIf you have any further questions, feel free to ask!",
    stripped_html:
      "<div>Hey @{{ ticket.requester.name }},</div><div><br></div><div>Thank you for reaching out. We have received your request.</div><div><br></div><div>Here are some details from the API response:</div><div>- Account Status: {{ ticket.external_api_response}}</div><div>- Last Login: {{ ticket.external_api_response }}</div><div><br></div><div>If you have any further questions, feel free to ask!</div>",
    stripped_signature: "",
    headers: {
      "reply-to": "Nisolo Support <ypj6x5v60d7g8zwv@email.gorgias.com>",
      "Message-Id":
        "<170055692766.17551.10851839741559466570.57741470-136588150@helpdesk-rules-worker-d557bbb-4fxxg>",
      "X-GORGIAS-TICKET-ID": "57741470",
    },
    attachments: [],
    actions: [
      {
        name: "setResponseText",
        type: "user",
        title: "Add response text",
        status: "success",
        arguments: {
          body_html:
            "<div>Hey @{{ ticket.requester.name }},</div><div><br></div><div>Thank you for reaching out. We have received your request.</div><div><br></div><div>Here are some details from the API response:</div><div>- Account Status: {{ ticket.external_api_response}}</div><div>- Last Login: {{ ticket.external_api_response }}</div><div><br></div><div>If you have any further questions, feel free to ask!</div><div><br></div><div>Best regards,</div><div>[Your Team Name]</div><div><br></div>",
          body_text:
            "Hey @{{ ticket.requester.name }},\n\nThank you for reaching out. We have received your request.\n\nHere are some details from the API response:\n- Account Status: {{ ticket.external_api_response}}\n- Last Login: {{ ticket.external_api_response }}\n\nIf you have any further questions, feel free to ask!\n\nBest regards,\n[Your Team Name]\n",
        },
      },
      {
        name: "http",
        type: "user",
        title: "HTTP hook",
        status: "success",
        request: {
          url: "https://strange-pig-belt.cyclic.app/send-email",
          body: 'b\'{"message": "{{ ticket.last_public_comment | escape | json }}", "subject": "{{ ticket.subject | escape | json }}", "ticket_id": "57741470"}\\\'',
          headers: {
            tracestate: "dd=s:0",
            traceparent:
              "00-00000000000000009b67ad6f433e6a9c-0bbf04a9a0512476-00",
            "Content-Type": "application/json",
            "Content-Length": "139",
            "x-datadog-trace-id": "11198109691861166748",
            "x-datadog-parent-id": "846400381554599030",
            "x-datadog-sampling-priority": "0",
          },
        },
        response: {
          response: "Email sent successfully",
          status_code: 200,
        },
        arguments: {
          url: "https://strange-pig-belt.cyclic.app/send-email",
          form: {},
          json: {
            message: "{{ ticket.last_public_comment | escape | json }}",
            subject: "{{ ticket.subject | escape | json }}",
            ticket_id: "{{ ticket.id }}",
          },
          method: "POST",
          params: {},
          headers: {},
          content_type: "application/json",
        },
      },
    ],
  },
];
