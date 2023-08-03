---
sidebar_position: 4
description: How to set up the client using Narrowlink
keywords: [Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Client Setup
In this section, you will learn how to set up a client using Narrowlink. Please note that this section covers only the basic configuration of the client. For more advanced configurations, such as integrating with SSH or VPN, please refer to the [extended tutorial](/docs/category/extended-tutorial/).

## Create a Token

:::info
If you already have a token, you can skip this step and proceed to the next step to [configure the client](#configure-the-client).
:::


To configure the client, you need to create a token using the Token Generator component. Follow the same steps as for generating an agent token, but modify the `token-generator.yaml` file as shown below to generate a client token:

```yaml
secret: [1,2,3,4] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
tokens: # list of tokens
  #- !Agent # agent token
  # ...
  - !Client # client token
    uid: 00000000-0000-0000-0000-000000000001 # client uid, please use a unique uid for each user
    name: client_name_1 # client name, please use a unique name for each client (not effective yet)
    exp: 1704067200 # expiration time in seconds since epoch (Monday, January 1, 2024 0:00:00 GMT)
    policies: # policies for this client
      permit: true # whitelist mode
      policies: # list of policies
        - !Any # any type of protocols
          - null # agent name, null means any agent
          - true # allow or dency this agent
```
This token defines that it belongs to the user space with `00000000-0000-0000-0000-000000000001` user id (uid) and client_name_1 as the client name. The token will expire on `1704067200` (Monday, January 1, 2024 0:00:00 GMT). The access control policy allows the client to access all agents[^1]. You can change these values to your desired values. The user space is used to isolate agents and clients; therefore, each user must have a unique uid. Also, each client must have a unique name.

:::tip
Note that users can have multiple clients and agents. You don't need to define the uid globally in the gateway; as soon as an agent or client connects with a uid, the gateway allocates a user space for that uid, and when the agent or client disconnects, the user space will be removed.
:::

Run the token generator with the following command to obtain the client token:

```bash

narrowlink-token-generator token-generator.yaml
```

## Configure the Client
Next, configure the client by creating a file named `client.yaml` in the folder where you will run the client, and insert the following content:

```yaml
gateway: gateway.domain.tld:443 # Address of the gateway
token: eyJ0eX....kNHYQ_4 # Token for authentication
```

Replace the `token` field with the obtained token, and replace the `gateway` field with the address of the gateway.

Finally, run the client with the following command to get a list of the agents:

```bash
sh$ narrowlink list
agent_name
  Address: "127.0.0.1:44236",
  Connection Ping: 1ms
```

You can also use `narrowlink list -h` to get more information about the command or use `narrowlink -h` to get a list of all commands.


That's it! You have successfully configured the client. Now, you can set up a local proxy server to route your traffic through the agent. For more information, please refer to the "Share Network Access" section. Additionally, you can check the [Extended Tutorial](/docs/category/extended-tutorial/) or [Client](/docs/client) sections in the documentation for more information.




[^1]: Clients can be restricted to access specific agents and their destinations by using access control policies. Please refer to [Access Control](/docs/extended-tutorial/access-control) section for more information.
