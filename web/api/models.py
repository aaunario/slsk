# Create your models here.
from django.db import models
from django.utils import timezone

class PlayerManager(models.Manager):
    def create_player(self, name):
        player = self.create(name=name)
        return player


class Player(models.Model):
    name = models.CharField(max_length=200, unique=True)
    created = models.DateTimeField(default=timezone.now)
    objects = PlayerManager()

    class Meta:
        ordering = ['name']

    def get_created(self):
        return self.name + 'created at ' + str(self.created)

    def __unicode__(self):
        return self.name


class Game(models.Model):
    start_time = models.DateTimeField(default=timezone.now)


class Team(models.Model):
    created = models.DateTimeField(default=timezone.now)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    is_home = models.BooleanField(default=True)
    members = models.ManyToManyField(Player, through='TeamMembership', related_name='teams')


class TeamMembership(models.Model):
    class Meta:
        order_with_respect_to = 'player'
        unique_together = ('player', 'team')

    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    batting_pos = models.SmallIntegerField(default=1)


# One game appearance per player in a game


class PlateAppearance(models.Model):
    class Outcome(models.TextChoices):
        NOPA = 'NOPA', 'No Plate Appearance'  # When 3rd out happens before conclusion of PA
        # Safe
        HIT1 = '1B', 'Single'
        HIT2 = '2B', 'Double'
        HIT3 = '3B', 'Triple'
        IPHR = 'IPHR', 'In-the-park Homerun'
        HR = 'HR', 'Homerun'
        BB = 'BB', 'Walk'
        IBB = 'IBB', "Intentional Walk"
        HBP = 'HBP', 'Hit By Pitch'
        # Out
        KL = 'KC', 'Called 3rd Strike'
        KS = 'KS', 'Strikout Swinging'
        GIDP = 'GIDP', 'Ground Into Double Play'
        SACF = 'SACF', 'Sacrifice Fly'
        SACH = 'SACH', 'Sacrifice Hit'
        RI = "Runner's Interference"
        # Other
        FC = 'FC', "Fielder's Choice"
        E = 'E', 'Error'

    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    batter = models.ForeignKey(Player, on_delete=models.CASCADE)
    inning = models.SmallIntegerField(default=1)
    outcome = models.CharField(max_length=25, choices=Outcome.choices)

class PitchingAppearance(models.Model):
    plate_appearance = models.ForeignKey(PlateAppearance, on_delete=models.CASCADE)
    pitcher = models.ForeignKey(Player, on_delete=models.CASCADE)

class FieldingPlay(models.Model):
    class Type(models.TextChoices):
        E = 'E', 'Error'
        CI = 'CI', "Catcher's Interference"
        PO = 'PO', 'Putout'
        A = 'A', 'Assist'
        DP = 'DP', 'Double Play'
        TP = 'TP', 'Triple Play'
        BK = 'BK', 'Balk'

    fielder = models.ForeignKey(Player, on_delete=models.CASCADE)
    plate_appearance = models.ForeignKey(PlateAppearance, on_delete=models.CASCADE)
    type = models.CharField(
        max_length=2,
        choices=Type.choices
    )

class RunningPlay(models.Model):
    class Code(models.TextChoices):
        SB = 'SB', 'Stolen Base'
        CS = 'CS', 'Caught Stealing'
        R = 'R', 'Run Scored'

    runner = models.ForeignKey(Player, on_delete=models.CASCADE)


