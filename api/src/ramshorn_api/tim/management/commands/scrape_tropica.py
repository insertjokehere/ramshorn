from django.core.management.base import BaseCommand
from ramshorn_api.tim import models
import requests
from bs4 import BeautifulSoup

IGNORE = ["1-2-GROW! Display"]


class Command(BaseCommand):

    def handle(self, *args, **options):
        content = requests.get("http://tropica.com/en/plants/")
        soup = BeautifulSoup(content.text)

        names = set([list(x.children)[0].strip() for x in soup.find_all("div", class_="plantGallaryItemName")])
        for name in names:
            if name in IGNORE:
                continue

            genus = ""
            species = ""
            variant = ""

            name = name.replace("sp.", "")
            name = name.replace("var.", "")

            if "'" in name:
                st = name.index("'")
                ed = name.index("'", st + 1)
                variant = name[st + 1:ed]
                name = name[:st]

            name = name.strip()

            components = name.split(" ")
            if len(components) == 1:
                genus = components[0]
            elif len(components) == 2:
                genus = components[0]
                species = components[1]
            elif len(components) == 3:
                genus = components[0]
                species = components[1]
                variant = components[2]

            models.FloraType.objects.get_or_create(genus=genus, species=species, variant=variant)
