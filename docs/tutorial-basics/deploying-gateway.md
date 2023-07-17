---
sidebar_position: 2
description: How to deploy the gateway using Narrowlink
keywords: [Deploy Gateway, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel, ACME, Let's Encrypt, TLS, SSL, HTTPS, HTTP, Websocket, WSS, WS, Secure, Certificate, Reverse Proxy, Tunnel]
---

# Deploying Gateway

In this tutorial, you will need a valid IP address on the internet and a domain name to configure auto certificate issuance.

:::info
You have the option to deploy the gateway with or without the TLS protocol. However, we highly recommend running it with TLS whenever possible. The gateway can automatically manage certificate issuance for itself and the publishing hosts. Having a valid domain name is mandatory in this case. However, if you don't have access to a valid domain or have any other reasons, you can use your own certificate or run it without TLS. If you encounter any other configurations not covered in the basic tutorial, please refer to the [Gateway documentation](/docs/gateway) for further assistance.
:::

Once you have installed the gateway, you need to configure the expected services. Create a file named `gateway.yaml` in the folder where you will run the gateway and paste the following content into it:

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

:::note
Please note that the `secret` should be your desired strong key, which must be at least 8 bytes long and kept secret. This key is used to authenticate clients and agents. The key must be presented as a sequence of bytes in either decimal or hex format. For example, the key `strong` in the above configuration is equivalent to `115,116,114,111,110,103`. You can use [CyberChef](https://gchq.github.io/CyberChef/#recipe=To_Decimal('Comma',false)&input=c3Ryb25n) to convert your key to the desired format.

:::

Next, you need to set an A record for your domain to point to the IP address of your server and update the domains field in the configuration file accordingly. If you have multiple domains, you can add them to the list. Also, update the email address in the email field with your own email address. It will be used to register an account with Let's Encrypt for issuing certificates for your domain.

Now, you can run the gateway with the following command. If you are running the gateway without root access in Linux, use:

```bash
sudo setcap 'cap_net_bind_service=+ep' $(which narrowlink-gateway); narrowlink-gateway
```

If you are running the gateway with root/superuser access, use the following command:

```bash
narrowlink-gateway
```

That's it! You have successfully deployed the gateway. You can now proceed to the next step to deploy the agent.
