---
sidebar_position: 2
description: How to deploy the gateway using Narrowlink
keywords: [Deploy Gateway, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel, ACME, Let's Encrypt, TLS, SSL, HTTPS, HTTP, Websocket, WSS, WS, Secure, Certificate, Reverse Proxy, Tunnel]
---

# Deploying Gateway

In this tutorial, we will guide you through the process of deploying the gateway using Narrowlink. Before you begin, please ensure that you have a valid IP address on the internet and a domain name to configure automatic certificate issuance. If you don't have a valid domain name, you can use the Ws[^1] protocol to run the gateway without TLS. However, we don't recommend this configuration.

:::info
If you plan to use an already deployed gateway, you can skip this step and proceed to the next one to deploy the [agent setup](/docs/basic-tutorial/agent-setup).
:::

To start the deployment process, make sure your domain name is correctly pointing to the IP address of your server, and that ports `80` and `443` are open. Once you've confirmed these requirements, you'll need to configure Ws and Wss services with Let's Encrypt to enable automatic certificate issuance in the Narrowlink gateway by following the steps below.

Create a file named `gateway.yaml` in the folder where you'll run the gateway, and paste the following content into it:

```yaml
name: basic-tutorial # name of the gateway, it currently has no effect
secret: [1,2,3,4] # secret key for the gateway is used to authenticate clients and agents, at least 8 bytes
services: # list of services
- !Wss # secure (TLS) websocket service
  domains: ["domain.ltd"] # list of domains that this service should listen to
  listen_addr: "0.0.0.0:443" # address to listen to
  tls_config: !Acme # TLS configuration
    email: "email@domain.tld" # email address to register with Let's Encrypt
    challenge_type: Http01 # Http01 or TlsAlpn01 (default: Http01)
    directory_url: https://acme-v02.api.letsencrypt.org/directory # Let's Encrypt directory URL
- !Ws # insecure websocket service
  domains: ["domain.ltd"] # list of domains that this service should listen to
  listen_addr: "0.0.0.0:80" # address to listen to
```

:::caution
Please note that the `secret` should be your desired strong key, which must be at least 8 bytes long and kept secret. This key is used to authenticate clients and agents. The key must be presented as a sequence of bytes in either decimal or hex format. For example, the key `strong` in the above configuration is equivalent to `115,116,114,111,110,103`. You can use [CyberChef](https://gchq.github.io/CyberChef/#recipe=To_Decimal('Comma',false)&input=c3Ryb25n) to convert your key to the desired format.
:::

Next, set your domain name in the domains field. If you have multiple domains, you can add them as a list. Also, update the email address in the email field with your own email address, as it will be used to register an account with Let's Encrypt for issuing certificates for your domain.

Now, you can run the gateway with the following command. If you are running the gateway without root access in Linux, use:

```bash
sudo setcap 'cap_net_bind_service=+ep' $(which narrowlink-gateway); narrowlink-gateway
```

If you are running the gateway with root/superuser access, use the following command:

```bash
narrowlink-gateway
```

That's it! You have successfully deployed the gateway. Now you can proceed to the next step to deploy the agent.

[^1]: Ws is a websocket protocol without TLS. You can learn more about its setup in the [Gateway documentation](/docs/gateway).
