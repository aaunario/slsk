from django.test import TestCase
from django.utils import timezone
from ..models import Player

class PlayerTest(TestCase):
    def setUp(self):
        Player.objects.create_player(name='Test')
        Player.objects.create_player(name='Ayrris')

    def test_get_created(self):
        player_test = Player.objects.get(name='Test')
        player_me = Player.objects.get(name='Ayrris')
        self.assertLessEqual(player_test.get_created(), str(timezone.now()))
        self.assertLessEqual(player_me.get_created(), player_test.get_created())

