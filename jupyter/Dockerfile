FROM jupyter/base-notebook:357e75831bc9

RUN python -m pip install --no-cache-dir --upgrade --force-reinstall pip

# Install Tensorflow
RUN pip install --quiet --no-cache-dir \
    'tensorflow==2.7.0' && \
    fix-permissions "${CONDA_DIR}" && \
    fix-permissions "/home/${NB_USER}"

# Les actions de ce Dockerfile doivent être réalisées en tant que root
USER 0

# Default directory
WORKDIR /work

ADD requirements.txt /work/requirements.txt
ADD nlp /work/nlp

# Installation des dépendances avec conda dans le Jupyter Notebook
RUN conda install -c anaconda curl && \
    pip install --no-cache-dir python-resize-image && \
    conda clean --yes --all

RUN pip install --no-cache-dir -r requirements.txt

# Téléchargement des ressources aditionnelles pour spacy et nltk
RUN python -m spacy download en_core_web_md && \
    python -m nltk.downloader punkt stopwords wordnet averaged_perceptron_tagger maxent_ne_chunker words

RUN chown -R 1000:1000 /work

USER 1000
