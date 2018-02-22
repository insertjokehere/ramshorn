FROM python:3.6

ARG INSTALL_MODE=develop

RUN mkdir /src

WORKDIR /src

ADD requirements.txt /src/requirements.txt

RUN pip install -r /src/requirements.txt

ADD . /src/

RUN python setup.py ${INSTALL_MODE}
