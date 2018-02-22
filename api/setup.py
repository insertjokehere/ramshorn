#!/usr/bin/env python
# -*- encoding: utf-8 -*-
from __future__ import absolute_import
from __future__ import print_function

import io
import re
from glob import glob
from os.path import basename
from os.path import dirname
from os.path import join
from os.path import splitext

from setuptools import find_packages
from setuptools import setup


def read(*names, **kwargs):
    return io.open(
        join(dirname(__file__), *names),
        encoding=kwargs.get('encoding', 'utf8')
    ).read()


setup(
    name='ramshorn_api',
    version='0.0.0',
    license='AGPLv3',
    description='Open Source Aquarium Information Management',
    author='Will Hughes',
    author_email='will@willhughes.name',
    url='https://github.com/insertjokehere/ramshorn',
    packages=find_packages('src'),
    package_dir={'': 'src'},
    include_package_data=True,
    zip_safe=False,
    install_requires=read('requirements.txt').split(),
    entry_points={
        'console_scripts': [
            'ramshorn_api = ramshorn_api:main',
        ]
    }
)
