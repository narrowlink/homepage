---
sidebar_position: 3
description: How to set up an agent using Narrowlink
keywords: [Agent, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Agent Setup

In this section, we will show you how to set up an agent using Narrowlink. Please note that this section covers only the basic configuration of the agent. For more advanced configurations, such as publishing a webserver or using an SNI proxy, please refer to the [extended tutorial](/docs/category/extended-tutorial).

To configure the agent, you first need to create a token using the [Token Generator](/docs/token-generator) component.
## Create a Token

:::info
If you already have a token, you can skip this step and proceed to the next step to [configure the agent](#configure-the-agent).
:::

To generate a token, create a file named `token-generator.yaml` and insert the following content:

```yaml
secret: [1,2,3,4] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
tokens: # list of tokens
  - !Agent # agent token
    uid: 00000000-0000-0000-0000-000000000001 # agent uid, please use a unique uid for each user
    name: agent_name # agent name, please use a unique name for each agent
    exp: 1704067200 # expiration time in seconds since epoch (Monday, January 1, 2024 0:00:00 GMT)
```

This token defines that it belongs to the user space with `00000000-0000-0000-0000-000000000001` user id (uid) and `agent_name` as the agent name. The token will expire on `1704067200` (Monday, January 1, 2024 0:00:00 GMT). You can change these values to your desired values. The user space is used to isolate agents and clients; therefore, each user must have a unique uid. Also, each agent must have a unique name.


:::tip
Note that users can have multiple clients and agents. You don't need to define the uid globally in the gateway; as soon as an agent or client connects with a uid, the gateway allocates a user space for that uid, and when the agent or client disconnects, the user space will be removed.
:::

Run the token generator with the following command to obtain the token:

```bash
narrowlink-token-generator token-generator.yaml
```
## Configure the Agent

Now, you can configure the agent by creating a file named `agent.yaml` in the folder where you will run the agent and insert the following content:
```yaml
gateway: gateway.domain.example:443 # address of the gateway
token: eyJ0eX....kNHYQ_4 # token for authentication
```

Replace the `token` field with the obtained token, and replace the `gateway` field with the address of the gateway.

Finally, run the agent with the following command:

```bash
narrowlink-agent
```


That's it! You have successfully configured the agent. You can now proceed to the next step to configure the client.
