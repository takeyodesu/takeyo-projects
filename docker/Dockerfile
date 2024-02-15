FROM nginx

ARG NODE_VERSION
ENV NODE_VERSION=${NODE_VERSION}

RUN apt-get update && apt-get install -y \
    curl \
    git

RUN curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
RUN git config --global user.name "ユーザー名"
RUN git config --global user.email "メールアドレス"
RUN apt-get install -y nodejs

RUN rm /etc/nginx/conf.d/default.conf

COPY docker/nginx.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html

COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
