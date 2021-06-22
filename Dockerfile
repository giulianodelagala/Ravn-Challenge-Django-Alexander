FROM python:3.8

ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install -y --no-install-recommends 

WORKDIR /
COPY challenge/* challenge/
COPY swapi/* swapi/
COPY db.sqlite3 /
COPY manage.py /

COPY requirements.txt /
RUN pip3 install -r requirements.txt

EXPOSE 8000

CMD python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000
# CMD ["%%CMD%%"]