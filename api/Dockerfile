FROM python:3.6

ENV TINI_VERSION v0.17.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini.asc /tini.asc
RUN gpg --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 595E85A6B1B4779EA4DAAEC70B588DFF0527A9B7 \
 && gpg --verify /tini.asc \
 && chmod +x /tini

RUN apt-get update && apt-get install -y \
		postgresql-client libpq-dev \
	--no-install-recommends && rm -rf /var/lib/apt/lists/*

ARG INSTALL_MODE=develop

RUN mkdir /src

WORKDIR /src

ADD requirements.txt /src/requirements.txt

RUN pip install -r /src/requirements.txt

ADD . /src/

RUN python setup.py ${INSTALL_MODE}

CMD ["/src/bin/entrypoint.sh"]

ENTRYPOINT ["/tini", "--"]
