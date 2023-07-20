---
sidebar_position: 3
description: How to set up an agent using Narrowlink
keywords: [Agent, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Agent Setup

To configure the agent, you first need to create a token using the [Token Generator](/docs/token-generator) component.
To generate a token, create a file named token-generator.yaml and insert the following content:

```yaml
secret: [1,2,3,4] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
tokens: # list of tokens
  - !Agent # agent token
    uid: 00000000-0000-0000-0000-000000000001 # agent uid, please use a unique uid for each user
    name: agent_name # agent name, please use a unique name for each agent
    exp: 1704067200 # expiration time in seconds since epoch (Monday, January 1, 2024 0:00:00 GMT)
```

:::note
Please note that users can have multiple agents. However, each agent must have a unique name. Also, uid is used to indicate the user of the agent. Therefore, each user must have a unique uid.
:::

Run the token generator with the following command to obtain the token:

```bash
narrowlink-token-generator token-generator.yaml
```

Now, you can configure the agent by creating a file named agent.yaml in the folder where you will run the agent and insert the following content:

```yaml
gateway: gateway.domain.tld:443 # address of the gateway
token: eyJ0eX....kNHYQ_4 # token for authentication
```

Replace the `token` field with the value obtained from the token generator and replace the gateway field with the address of the gateway.

Finally, run the agent with the following command:

```bash
narrowlink-agent
```

:::note
This is the basic configuration for the agent. Please referee [webserver-publish](/docs/tutorial-extras/webserver-publish/), [Load Balancing](/docs/tutorial-extras/load-balancing), and [End-to-end Encryption](http://localhost:3000/docs/tutorial-extras/end-to-end-encryption) sections if you wish use these features.
:::


That's it! You have successfully configured the agent. You can now proceed to the next step to configure the client.
